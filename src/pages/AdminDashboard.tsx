import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { 
  LayoutDashboard, 
  Package, 
  DollarSign, 
  Calendar,
  LogOut,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectOrdersTable from "@/components/admin/ProjectOrdersTable";
import AppointmentsTable from "@/components/admin/AppointmentsTable";
import CourseBookingsTable from "@/components/admin/CourseBookingsTable";
import RevenueChart from "@/components/admin/RevenueChart";
import { ProjectManagement } from "@/components/admin/ProjectManagement";
import { SalesAnalytics } from "@/components/admin/SalesAnalytics";
import { CouponManagement } from "@/components/admin/CouponManagement";
import { CouponAnalytics } from "@/components/admin/CouponAnalytics";
import TrafficAnalytics from "@/components/admin/TrafficAnalytics";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalAppointments: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });
  const [aiSummary, setAiSummary] = useState("");

  useEffect(() => {
    checkAdminAccess();
    fetchStats();
  }, []);

  // Real-time notifications setup
  useEffect(() => {
    const playNotificationSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    };

    // Subscribe to project_orders changes
    const ordersChannel = supabase
      .channel('project-orders-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'project_orders'
        },
        (payload) => {
          console.log('New order received:', payload);
          playNotificationSound();
          toast({
            title: "🎉 New Project Order!",
            description: `Order from ${payload.new.client_name} for ${payload.new.project_title}`,
            duration: 6000,
          });
          fetchStats(); // Refresh stats
        }
      )
      .subscribe();

    // Subscribe to appointments changes
    const appointmentsChannel = supabase
      .channel('appointments-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'appointments'
        },
        (payload) => {
          console.log('New appointment received:', payload);
          playNotificationSound();
          toast({
            title: "📅 New Appointment Booking!",
            description: `Appointment from ${payload.new.name} on ${payload.new.date}`,
            duration: 6000,
          });
          fetchStats(); // Refresh stats
        }
      )
      .subscribe();

    // Cleanup function
    return () => {
      supabase.removeChannel(ordersChannel);
      supabase.removeChannel(appointmentsChannel);
    };
  }, [toast]);

  const fetchAISummary = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("ai-admin-summary", {
        body: { stats }
      });

      if (error) throw error;
      setAiSummary(data.summary);
    } catch (error: any) {
      console.error("AI summary error:", error);
    }
  };

  const fetchStats = async () => {
    try {
      // Fetch project orders
      const { data: orders, error: ordersError } = await supabase
        .from("project_orders")
        .select("amount, status");

      if (ordersError) throw ordersError;

      // Fetch appointments
      const { data: appointments, error: appointmentsError } = await supabase
        .from("appointments")
        .select("id");

      if (appointmentsError) throw appointmentsError;

      // Calculate stats
      const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.amount), 0) || 0;
      const pendingOrders = orders?.filter(order => order.status === "pending").length || 0;

      const newStats = {
        totalProjects: orders?.length || 0,
        totalAppointments: appointments?.length || 0,
        totalRevenue,
        pendingOrders,
      };

      setStats(newStats);
      
      // Fetch AI summary after stats are updated
      if (newStats.totalProjects > 0 || newStats.totalAppointments > 0) {
        try {
          const { data, error } = await supabase.functions.invoke("ai-admin-summary", {
            body: { stats: newStats }
          });
          if (!error && data) {
            setAiSummary(data.summary);
          }
        } catch (aiError) {
          console.error("AI summary error:", aiError);
        }
      }
    } catch (error: any) {
      console.error("Error fetching stats:", error);
      toast({
        title: "Error",
        description: "Failed to fetch dashboard statistics",
        variant: "destructive",
      });
    }
  };

  const checkAdminAccess = () => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    
    if (isLoggedIn !== "true") {
      toast({
        title: "Access Denied",
        description: "Please log in to access the dashboard",
        variant: "destructive",
      });
      navigate("/admin/login");
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: Package,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Total Revenue",
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Appointments",
      value: stats.totalAppointments,
      icon: Calendar,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      icon: Clock,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between glass-card p-6 rounded-2xl border-border/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gradient flex items-center gap-3 animate-gradient">
              <LayoutDashboard className="w-10 h-10 animate-float" />
              Admin Control Center
            </h1>
            <p className="text-muted-foreground mt-2">
              Real-time business analytics and management
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="flex items-center gap-2 hover-glow relative z-10"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </motion.div>

        {/* Enhanced Stats Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card hover-glow border-border/50 relative overflow-hidden group cursor-pointer">
                <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <motion.div 
                    className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.div 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span>Live data</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Summary with Enhanced Styling */}
        {aiSummary && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <Card className="glass-card border-border/50 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  AI Business Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">{aiSummary}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Revenue Chart with Enhanced Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <RevenueChart />
            </CardContent>
          </Card>
        </motion.div>

        {/* Tables with Enhanced UI */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="coupons">Coupons</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="glass-card border-border/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-secondary/5 to-accent/5">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Package className="w-6 h-6 text-secondary" />
                    Management Dashboard
                  </CardTitle>
                  <CardDescription className="text-base">
                    Track and manage all orders, bookings, and appointments in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="analytics" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-6 bg-muted/50">
                      <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Analytics
                      </TabsTrigger>
                      <TabsTrigger value="project-mgmt" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                        Projects
                      </TabsTrigger>
                      <TabsTrigger value="orders" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                        Orders
                      </TabsTrigger>
                      <TabsTrigger value="courses" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                        Courses
                      </TabsTrigger>
                      <TabsTrigger value="appointments" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                        Appointments
                      </TabsTrigger>
                      <TabsTrigger value="coupons" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                        Coupons
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="analytics" className="space-y-4">
                      <SalesAnalytics />
                    </TabsContent>

                    <TabsContent value="project-mgmt" className="space-y-4">
                      <ProjectManagement />
                    </TabsContent>
                    
                    <TabsContent value="orders" className="space-y-4">
                      <ProjectOrdersTable onUpdate={fetchStats} />
                    </TabsContent>
                    
                    <TabsContent value="courses" className="space-y-4">
                      <CourseBookingsTable />
                    </TabsContent>
                    
                    <TabsContent value="appointments" className="space-y-4">
                      <AppointmentsTable onUpdate={fetchStats} />
                    </TabsContent>

                    <TabsContent value="coupons" className="space-y-4">
                      <CouponManagement />
                      <CouponAnalytics />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <SalesAnalytics />
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            <TrafficAnalytics />
          </TabsContent>

          <TabsContent value="coupons" className="space-y-6">
            <CouponManagement />
            <CouponAnalytics />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectManagement />
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <RevenueChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

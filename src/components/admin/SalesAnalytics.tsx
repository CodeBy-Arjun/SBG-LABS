import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COLORS = ["#6D28D9", "#14B8A6", "#F59E0B", "#EF4444", "#3B82F6", "#10B981"];

export const SalesAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("week");
  const [salesData, setSalesData] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [topProjects, setTopProjects] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    growthPercentage: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      // Fetch orders for the selected time range
      const daysBack = timeRange === "week" ? 7 : timeRange === "month" ? 30 : 90;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - daysBack);

      const { data: orders, error: ordersError } = await supabase
        .from("project_orders")
        .select("*")
        .gte("created_at", startDate.toISOString())
        .eq("status", "completed");

      if (ordersError) throw ordersError;

      // Calculate stats
      const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.amount), 0) || 0;
      const totalOrders = orders?.length || 0;
      const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

      // Calculate growth (comparing to previous period)
      const prevStartDate = new Date(startDate);
      prevStartDate.setDate(prevStartDate.getDate() - daysBack);
      
      const { data: prevOrders } = await supabase
        .from("project_orders")
        .select("amount")
        .gte("created_at", prevStartDate.toISOString())
        .lt("created_at", startDate.toISOString())
        .eq("status", "completed");

      const prevRevenue = prevOrders?.reduce((sum, order) => sum + Number(order.amount), 0) || 0;
      const growthPercentage = prevRevenue > 0 ? ((totalRevenue - prevRevenue) / prevRevenue) * 100 : 0;

      setStats({
        totalRevenue,
        totalOrders,
        averageOrderValue,
        growthPercentage,
      });

      // Process sales data by day
      const salesByDay = orders?.reduce((acc: any, order) => {
        const date = new Date(order.created_at).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = { date, revenue: 0, orders: 0 };
        }
        acc[date].revenue += Number(order.amount);
        acc[date].orders += 1;
        return acc;
      }, {});

      setSalesData(Object.values(salesByDay || {}));

      // Fetch projects data for category analysis
      const { data: projects } = await supabase
        .from("projects")
        .select("category, purchase_count");

      const categoryStats = projects?.reduce((acc: any, project) => {
        if (!acc[project.category]) {
          acc[project.category] = { category: project.category, purchases: 0 };
        }
        acc[project.category].purchases += project.purchase_count || 0;
        return acc;
      }, {});

      setCategoryData(Object.values(categoryStats || {}));

      // Get top projects
      const { data: topProjectsData } = await supabase
        .from("projects")
        .select("title, purchase_count")
        .order("purchase_count", { ascending: false })
        .limit(10);

      setTopProjects(topProjectsData || []);

    } catch (error: any) {
      toast({
        title: "Error fetching analytics",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center p-8">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sales & Analytics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="quarter">Quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</div>
            <div className="flex items-center text-sm mt-2">
              {stats.growthPercentage >= 0 ? (
                <>
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">{stats.growthPercentage.toFixed(1)}%</span>
                </>
              ) : (
                <>
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-500">{Math.abs(stats.growthPercentage).toFixed(1)}%</span>
                </>
              )}
              <span className="text-muted-foreground ml-2">vs previous period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-sm text-muted-foreground mt-2">Completed orders</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.averageOrderValue.toFixed(2)}</div>
            <p className="text-sm text-muted-foreground mt-2">Per transaction</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{topProjects.length}</div>
            <p className="text-sm text-muted-foreground mt-2">Active projects</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
            <CardDescription>Revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#6D28D9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>Purchases by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="purchases"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daily Orders</CardTitle>
            <CardDescription>Number of orders per day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#14B8A6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top 10 Projects</CardTitle>
            <CardDescription>Most purchased projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topProjects.map((project, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm truncate flex-1">{project.title}</span>
                  <span className="text-sm font-bold text-primary ml-2">
                    {project.purchase_count} sales
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
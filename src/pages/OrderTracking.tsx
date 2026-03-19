import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Search, 
  Package, 
  Clock, 
  CheckCircle, 
  XCircle,
  DollarSign,
  Calendar,
  FileText,
  User,
  Mail,
  Phone,
  CreditCard
} from "lucide-react";

interface Order {
  id: string;
  invoice_number: string | null;
  project_title: string;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  amount: number;
  status: string;
  payment_status: string;
  payment_method: string | null;
  created_at: string;
  updated_at: string;
  project_description: string | null;
  original_amount: number | null;
  is_student_discount: boolean | null;
}

const OrderTracking = () => {
  const [searchType, setSearchType] = useState<"id" | "email">("email");
  const [searchValue, setSearchValue] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchValue.trim()) {
      toast.error("Please enter a search value");
      return;
    }

    setLoading(true);
    setSearched(true);
    
    try {
      let query = supabase.from("project_orders").select("*");
      
      if (searchType === "id") {
        query = query.eq("id", searchValue.trim());
      } else {
        query = query.ilike("client_email", `%${searchValue.trim()}%`);
      }
      
      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      
      setOrders(data || []);
      
      if (!data || data.length === 0) {
        toast.info("No orders found");
      } else {
        toast.success(`Found ${data.length} order(s)`);
      }
    } catch (error: any) {
      console.error("Error searching orders:", error);
      toast.error("Failed to search orders");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; icon: any; label: string }> = {
      pending: { variant: "secondary", icon: Clock, label: "Pending" },
      confirmed: { variant: "default", icon: CheckCircle, label: "Confirmed" },
      in_progress: { variant: "default", icon: Package, label: "In Progress" },
      completed: { variant: "default", icon: CheckCircle, label: "Completed" },
      cancelled: { variant: "destructive", icon: XCircle, label: "Cancelled" },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getPaymentStatusBadge = (paymentStatus: string) => {
    const statusConfig: Record<string, { variant: any; label: string }> = {
      pending: { variant: "secondary", label: "Payment Pending" },
      paid: { variant: "default", label: "Paid" },
      cod_pending: { variant: "secondary", label: "COD - Pending" },
      failed: { variant: "destructive", label: "Payment Failed" },
    };

    const config = statusConfig[paymentStatus] || statusConfig.pending;

    return (
      <Badge variant={config.variant}>
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-gradient">Track Your Order</h1>
            <p className="text-xl text-muted-foreground">
              Enter your order ID or email to check your order status
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Search By</Label>
                      <div className="flex gap-2 mt-2">
                        <Button
                          type="button"
                          variant={searchType === "email" ? "default" : "outline"}
                          onClick={() => setSearchType("email")}
                          className="flex-1"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </Button>
                        <Button
                          type="button"
                          variant={searchType === "id" ? "default" : "outline"}
                          onClick={() => setSearchType("id")}
                          className="flex-1"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Order ID
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="search">
                        {searchType === "email" ? "Email Address" : "Order ID"}
                      </Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          id="search"
                          type={searchType === "email" ? "email" : "text"}
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          placeholder={
                            searchType === "email" 
                              ? "your.email@example.com" 
                              : "Enter order ID"
                          }
                          className="glass-card"
                        />
                        <Button type="submit" disabled={loading}>
                          {loading ? (
                            <>
                              <Clock className="mr-2 h-4 w-4 animate-spin" />
                              Searching...
                            </>
                          ) : (
                            <>
                              <Search className="mr-2 h-4 w-4" />
                              Search
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {orders.length === 0 ? (
                <Card className="glass-card">
                  <CardContent className="p-12 text-center">
                    <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-2xl font-semibold mb-2">No Orders Found</h3>
                    <p className="text-muted-foreground">
                      We couldn't find any orders matching your search criteria.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                orders.map((order) => (
                  <Card key={order.id} className="glass-card">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {order.project_title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2">
                            {getStatusBadge(order.status)}
                            {getPaymentStatusBadge(order.payment_status)}
                            {order.is_student_discount && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-600">
                                🎓 Student Discount Applied
                              </Badge>
                            )}
                          </div>
                        </div>
                        {order.invoice_number && (
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Invoice Number</p>
                            <p className="font-mono font-semibold">{order.invoice_number}</p>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Customer Details */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Customer Details
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Name:</span>
                            <span className="font-medium">{order.client_name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Email:</span>
                            <span className="font-medium">{order.client_email}</span>
                          </div>
                          {order.client_phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Phone:</span>
                              <span className="font-medium">{order.client_phone}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <Separator />

                      {/* Order Details */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Order Details
                        </h4>
                        {order.project_description && (
                          <div className="bg-muted/50 p-4 rounded-lg mb-3">
                            <p className="text-sm whitespace-pre-wrap">
                              {order.project_description}
                            </p>
                          </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Order Date:</span>
                            <span className="font-medium">
                              {new Date(order.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Last Updated:</span>
                            <span className="font-medium">
                              {new Date(order.updated_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Payment Details */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Payment Details
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Amount:</span>
                            <span className="text-2xl font-bold flex items-center">
                              <DollarSign className="h-5 w-5" />
                              {order.amount.toLocaleString()}
                            </span>
                          </div>
                          {order.original_amount && order.original_amount !== order.amount && (
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Original Amount:</span>
                              <span className="line-through text-muted-foreground">
                                ₹{order.original_amount.toLocaleString()}
                              </span>
                            </div>
                          )}
                          {order.payment_method && (
                            <div className="flex items-center gap-2 text-sm">
                              <CreditCard className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Payment Method:</span>
                              <span className="font-medium uppercase">
                                {order.payment_method.replace("_", " ")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Order ID */}
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Order ID</p>
                        <p className="font-mono text-sm break-all">{order.id}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;

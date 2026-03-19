import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2, Download, FileSpreadsheet, Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { exportToCSV, exportToExcel, formatDataForExport } from "@/utils/exportData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaymentTracker from "./PaymentTracker";

interface ProjectOrder {
  id: string;
  project_title: string;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  amount: number;
  status: string;
  created_at: string;
  payment_method?: string;
  payment_status?: string;
  upi_id?: string;
  transaction_id?: string;
  invoice_number?: string;
}

interface ProjectOrdersTableProps {
  onUpdate?: () => void;
}

const ProjectOrdersTable = ({ onUpdate }: ProjectOrdersTableProps) => {
  const [orders, setOrders] = useState<ProjectOrder[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<ProjectOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    // Filter orders based on search query and date range
    let filtered = [...orders];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.client_name.toLowerCase().includes(query) ||
        order.client_email.toLowerCase().includes(query) ||
        order.project_title.toLowerCase().includes(query) ||
        (order.client_phone && order.client_phone.toLowerCase().includes(query))
      );
    }

    // Apply date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.created_at);
        const orderDay = new Date(orderDate.getFullYear(), orderDate.getMonth(), orderDate.getDate());
        
        switch (dateFilter) {
          case "today":
            return orderDay.getTime() === today.getTime();
          case "week":
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            return orderDay >= weekAgo;
          case "month":
            const monthAgo = new Date(today);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return orderDay >= monthAgo;
          default:
            return true;
        }
      });
    }

    setFilteredOrders(filtered);
  }, [searchQuery, dateFilter, orders]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("project_orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
      setFilteredOrders(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await (supabase as any)
        .from("project_orders")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      // Send status update email to client
      const order = orders.find(o => o.id === id);
      if (order && order.client_email) {
        try {
          await (supabase as any).functions.invoke("send-status-update", {
            body: {
              clientName: order.client_name,
              clientEmail: order.client_email,
              projectTitle: order.project_title,
              status,
              type: "order",
            },
          });
        } catch (emailError) {
          console.error("Failed to send status update email:", emailError);
        }
      }

      toast({
        title: "Status Updated",
        description: `Order marked as ${status}`,
      });

      fetchOrders();
      onUpdate?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleExportCSV = () => {
    const formatted = formatDataForExport(orders);
    exportToCSV(formatted, `project-orders-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: "Project orders exported to CSV",
    });
  };

  const handleExportExcel = () => {
    const formatted = formatDataForExport(orders);
    exportToExcel(formatted, `project-orders-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: "Project orders exported to Excel",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        No project orders yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, project, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleExportCSV}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
          <Button
            onClick={handleExportExcel}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export Excel
          </Button>
        </div>
      </div>

      {(searchQuery || dateFilter !== "all") && (
        <p className="text-sm text-muted-foreground">
          Found {filteredOrders.length} order(s) 
          {searchQuery && ` matching "${searchQuery}"`}
          {dateFilter !== "all" && ` from ${dateFilter}`}
        </p>
      )}
      
      <div className="rounded-md border border-border/50">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.project_title}</TableCell>
              <TableCell>{order.client_name}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{order.client_email}</div>
                  {order.client_phone && (
                    <div className="text-muted-foreground">{order.client_phone}</div>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-semibold">₹{order.amount.toLocaleString()}</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <Badge
                    variant={
                      order.payment_status === "paid"
                        ? "default"
                        : order.payment_status === "cod_pending"
                        ? "secondary"
                        : order.payment_status === "failed"
                        ? "destructive"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {order.payment_method?.toUpperCase() || "N/A"}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {order.payment_status === "paid" ? "✓ Paid" : 
                     order.payment_status === "cod_pending" ? "COD" : "Pending"}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "completed"
                      ? "default"
                      : order.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(order.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {order.status !== "completed" && (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => updateStatus(order.id, "completed")}
                        className="h-8"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Complete
                      </Button>
                    )}
                    {order.status !== "cancelled" && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => updateStatus(order.id, "cancelled")}
                        className="h-8"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    )}
                  </div>
                  <PaymentTracker
                    orderId={order.id}
                    currentStatus={order.payment_status || "pending"}
                    currentMethod={order.payment_method}
                    onUpdate={fetchOrders}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );
};

export default ProjectOrdersTable;

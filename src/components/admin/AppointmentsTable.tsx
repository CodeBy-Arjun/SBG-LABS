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

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time_slot: string;
  message: string | null;
  status: string;
  created_at: string;
}

interface AppointmentsTableProps {
  onUpdate?: () => void;
}

const AppointmentsTable = ({ onUpdate }: AppointmentsTableProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    // Filter appointments based on search query and date range
    let filtered = [...appointments];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(appointment => 
        appointment.name.toLowerCase().includes(query) ||
        appointment.email.toLowerCase().includes(query) ||
        appointment.phone.toLowerCase().includes(query) ||
        (appointment.message && appointment.message.toLowerCase().includes(query))
      );
    }

    // Apply date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        const appointmentDay = new Date(appointmentDate.getFullYear(), appointmentDate.getMonth(), appointmentDate.getDate());
        
        switch (dateFilter) {
          case "today":
            return appointmentDay.getTime() === today.getTime();
          case "week":
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            return appointmentDay >= weekAgo;
          case "month":
            const monthAgo = new Date(today);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return appointmentDay >= monthAgo;
          default:
            return true;
        }
      });
    }

    setFilteredAppointments(filtered);
  }, [searchQuery, dateFilter, appointments]);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
      setFilteredAppointments(data || []);
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
      const { error } = await supabase
        .from("appointments")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      // Send status update email to client
      const appointment = appointments.find(a => a.id === id);
      if (appointment && appointment.email) {
        try {
          await supabase.functions.invoke("send-status-update", {
            body: {
              clientName: appointment.name,
              clientEmail: appointment.email,
              projectTitle: `Appointment on ${new Date(appointment.date).toLocaleDateString()} at ${appointment.time_slot}`,
              status,
              type: "appointment",
            },
          });
        } catch (emailError) {
          console.error("Failed to send status update email:", emailError);
        }
      }

      toast({
        title: "Status Updated",
        description: `Appointment marked as ${status}`,
      });

      fetchAppointments();
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
    const formatted = formatDataForExport(appointments);
    exportToCSV(formatted, `appointments-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: "Appointments exported to CSV",
    });
  };

  const handleExportExcel = () => {
    const formatted = formatDataForExport(appointments);
    exportToExcel(formatted, `appointments-${new Date().toISOString().split('T')[0]}`);
    toast({
      title: "Export Successful",
      description: "Appointments exported to Excel",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        No appointments yet
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
              placeholder="Search by name, email, phone, or message..."
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
          Found {filteredAppointments.length} appointment(s) 
          {searchQuery && ` matching "${searchQuery}"`}
          {dateFilter !== "all" && ` from ${dateFilter}`}
        </p>
      )}

      {searchQuery && (
        <p className="text-sm text-muted-foreground">
          Found {filteredAppointments.length} appointment(s) matching "{searchQuery}"
        </p>
      )}
      
      <div className="rounded-md border border-border/50">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAppointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">{appointment.name}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{appointment.email}</div>
                  <div className="text-muted-foreground">{appointment.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{new Date(appointment.date).toLocaleDateString()}</div>
                  <div className="text-muted-foreground">{appointment.time_slot}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-muted-foreground max-w-xs truncate">
                  {appointment.message || "No message"}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    appointment.status === "confirmed"
                      ? "default"
                      : appointment.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {appointment.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {appointment.status !== "confirmed" && (
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => updateStatus(appointment.id, "confirmed")}
                      className="h-8"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Confirm
                    </Button>
                  )}
                  {appointment.status !== "cancelled" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateStatus(appointment.id, "cancelled")}
                      className="h-8"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Cancel
                    </Button>
                  )}
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

export default AppointmentsTable;

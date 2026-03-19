import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

interface CourseBooking {
  id: string;
  user_name: string;
  email: string;
  phone: string;
  course_id: string;
  course_name: string;
  time_preference: string;
  status: string;
  created_at: string;
}

const CourseBookingsTable = () => {
  const [bookings, setBookings] = useState<CourseBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchBookings();

    // Real-time subscription
    const channel = supabase
      .channel("course_bookings_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "course_bookings",
        },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from("course_bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error: any) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load course bookings");
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    setUpdatingId(bookingId);
    try {
      const { error } = await supabase
        .from("course_bookings")
        .update({ status: newStatus })
        .eq("id", bookingId);

      if (error) throw error;

      toast.success(
        newStatus === "confirmed"
          ? "Course booking confirmed!"
          : "Course booking rejected"
      );
      fetchBookings();
    } catch (error: any) {
      console.error("Error updating booking:", error);
      toast.error("Failed to update booking status");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const query = searchQuery.toLowerCase();
    return (
      booking.user_name.toLowerCase().includes(query) ||
      booking.email.toLowerCase().includes(query) ||
      booking.course_name.toLowerCase().includes(query) ||
      booking.phone.includes(query)
    );
  });

  const getStatusBadge = (status: string) => {
    if (status === "confirmed")
      return <Badge className="bg-green-500">Confirmed</Badge>;
    if (status === "rejected")
      return <Badge className="bg-red-500">Rejected</Badge>;
    return <Badge variant="secondary">Pending</Badge>;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Bookings</h2>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Time Preference</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.user_name}</TableCell>
                  <TableCell>{booking.course_name}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{booking.email}</div>
                      <div className="text-muted-foreground">{booking.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">
                    {booking.time_preference.replace("-", " ")}
                  </TableCell>
                  <TableCell>
                    {format(new Date(booking.created_at), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell className="text-right">
                    {booking.status === "pending" && (
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => updateBookingStatus(booking.id, "confirmed")}
                          disabled={updatingId === booking.id}
                        >
                          {updatingId === booking.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateBookingStatus(booking.id, "rejected")}
                          disabled={updatingId === booking.id}
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                  No course bookings found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourseBookingsTable;

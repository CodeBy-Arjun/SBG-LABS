import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, FileText, Download } from "lucide-react";

interface PaymentTrackerProps {
  orderId: string;
  currentStatus: string;
  currentMethod?: string;
  onUpdate: () => void;
}

const PaymentTracker = ({ orderId, currentStatus, currentMethod, onUpdate }: PaymentTrackerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState({
    paymentStatus: currentStatus || "pending",
    transactionId: "",
    paymentDate: new Date().toISOString().split('T')[0],
  });

  const handleUpdatePayment = async () => {
    try {
      const { error } = await supabase
        .from("project_orders")
        .update({
          payment_status: paymentData.paymentStatus,
          transaction_id: paymentData.transactionId || null,
          payment_date: paymentData.paymentStatus === 'paid' ? new Date(paymentData.paymentDate).toISOString() : null,
        })
        .eq("id", orderId);

      if (error) throw error;

      toast({
        title: "Payment Updated",
        description: "Payment status has been updated successfully",
      });

      setIsOpen(false);
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleGenerateInvoice = async () => {
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-invoice", {
        body: { orderId }
      });

      if (error) throw error;

      // Create a blob from the HTML and open in new window
      const blob = new Blob([data.html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const win = window.open(url, '_blank');
      
      // After a delay, trigger print dialog
      if (win) {
        setTimeout(() => {
          win.print();
        }, 500);
      }

      toast({
        title: "Invoice Generated",
        description: `Invoice ${data.invoiceNumber} has been generated`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate invoice",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="gap-2"
        >
          <CreditCard className="w-4 h-4" />
          Update Payment
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleGenerateInvoice}
          disabled={isGenerating}
          className="gap-2"
        >
          <FileText className="w-4 h-4" />
          {isGenerating ? "Generating..." : "Invoice"}
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Payment Status</DialogTitle>
            <DialogDescription>
              Update payment information for this order
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Payment Status</Label>
              <Select
                value={paymentData.paymentStatus}
                onValueChange={(value) =>
                  setPaymentData({ ...paymentData, paymentStatus: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="cod_pending">COD Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentData.paymentStatus === 'paid' && (
              <>
                <div>
                  <Label htmlFor="transactionId">Transaction ID</Label>
                  <Input
                    id="transactionId"
                    value={paymentData.transactionId}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, transactionId: e.target.value })
                    }
                    placeholder="Enter transaction ID"
                  />
                </div>

                <div>
                  <Label htmlFor="paymentDate">Payment Date</Label>
                  <Input
                    id="paymentDate"
                    type="date"
                    value={paymentData.paymentDate}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, paymentDate: e.target.value })
                    }
                  />
                </div>
              </>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdatePayment}>
                Update Payment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentTracker;

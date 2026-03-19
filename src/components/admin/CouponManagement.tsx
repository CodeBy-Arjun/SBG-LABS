import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Trash2, Edit, Ticket, TrendingUp } from "lucide-react";

interface Coupon {
  id: string;
  code: string;
  discount_type: "flat" | "percentage";
  discount_value: number;
  min_purchase: number;
  usage_limit: number | null;
  used_count: number;
  applicable_categories: string[];
  start_date: string;
  end_date: string | null;
  is_active: boolean;
  created_at: string;
}

export const CouponManagement = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [formData, setFormData] = useState({
    code: "",
    discount_type: "percentage" as "flat" | "percentage",
    discount_value: "",
    min_purchase: "0",
    usage_limit: "",
    applicable_categories: "",
    end_date: "",
  });

  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("coupons")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Coupon[];
    },
  });

  const { data: redemptions = [] } = useQuery({
    queryKey: ["coupon-redemptions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("coupon_redemptions")
        .select("*");
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase.from("coupons").insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      toast.success("Coupon created successfully!");
      setIsDialogOpen(false);
      resetForm();
    },
    onError: () => toast.error("Failed to create coupon"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const { error } = await supabase
        .from("coupons")
        .update(data)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      toast.success("Coupon updated successfully!");
      setIsDialogOpen(false);
      setEditingCoupon(null);
      resetForm();
    },
    onError: () => toast.error("Failed to update coupon"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("coupons").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coupons"] });
      toast.success("Coupon deleted successfully!");
    },
    onError: () => toast.error("Failed to delete coupon"),
  });

  const resetForm = () => {
    setFormData({
      code: "",
      discount_type: "percentage",
      discount_value: "",
      min_purchase: "0",
      usage_limit: "",
      applicable_categories: "",
      end_date: "",
    });
    setEditingCoupon(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const couponData = {
      code: formData.code.toUpperCase(),
      discount_type: formData.discount_type,
      discount_value: parseFloat(formData.discount_value),
      min_purchase: parseFloat(formData.min_purchase),
      usage_limit: formData.usage_limit ? parseInt(formData.usage_limit) : null,
      applicable_categories: formData.applicable_categories
        ? formData.applicable_categories.split(",").map((c) => c.trim())
        : [],
      end_date: formData.end_date || null,
      is_active: true,
    };

    if (editingCoupon) {
      updateMutation.mutate({ id: editingCoupon.id, data: couponData });
    } else {
      createMutation.mutate(couponData);
    }
  };

  const handleEdit = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    setFormData({
      code: coupon.code,
      discount_type: coupon.discount_type,
      discount_value: coupon.discount_value.toString(),
      min_purchase: coupon.min_purchase.toString(),
      usage_limit: coupon.usage_limit?.toString() || "",
      applicable_categories: coupon.applicable_categories.join(", "),
      end_date: coupon.end_date
        ? new Date(coupon.end_date).toISOString().split("T")[0]
        : "",
    });
    setIsDialogOpen(true);
  };

  const generateCouponCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, code });
  };

  const toggleActive = (coupon: Coupon) => {
    updateMutation.mutate({
      id: coupon.id,
      data: { is_active: !coupon.is_active },
    });
  };

  const totalRedemptions = redemptions.length;
  const totalDiscountGiven = redemptions.reduce(
    (sum: number, r: any) => sum + Number(r.discount_applied),
    0
  );

  if (isLoading) {
    return <div className="p-6">Loading coupons...</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Coupon Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Create Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingCoupon ? "Edit Coupon" : "Create New Coupon"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="code">Coupon Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value.toUpperCase() })
                      }
                      required
                      placeholder="SAVE20"
                    />
                    <Button type="button" onClick={generateCouponCode} variant="outline">
                      Generate
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="discount_type">Discount Type</Label>
                  <Select
                    value={formData.discount_type}
                    onValueChange={(value: "flat" | "percentage") =>
                      setFormData({ ...formData, discount_type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                      <SelectItem value="flat">Flat Amount (₹)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="discount_value">Discount Value</Label>
                  <Input
                    id="discount_value"
                    type="number"
                    step="0.01"
                    value={formData.discount_value}
                    onChange={(e) =>
                      setFormData({ ...formData, discount_value: e.target.value })
                    }
                    required
                    placeholder={formData.discount_type === "percentage" ? "20" : "500"}
                  />
                </div>

                <div>
                  <Label htmlFor="min_purchase">Min Purchase Amount (₹)</Label>
                  <Input
                    id="min_purchase"
                    type="number"
                    step="0.01"
                    value={formData.min_purchase}
                    onChange={(e) =>
                      setFormData({ ...formData, min_purchase: e.target.value })
                    }
                    placeholder="0"
                  />
                </div>

                <div>
                  <Label htmlFor="usage_limit">Usage Limit (Optional)</Label>
                  <Input
                    id="usage_limit"
                    type="number"
                    value={formData.usage_limit}
                    onChange={(e) =>
                      setFormData({ ...formData, usage_limit: e.target.value })
                    }
                    placeholder="Unlimited"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="categories">
                    Applicable Categories (comma-separated, optional)
                  </Label>
                  <Input
                    id="categories"
                    value={formData.applicable_categories}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        applicable_categories: e.target.value,
                      })
                    }
                    placeholder="IoT, Embedded, Full Stack"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="end_date">Expiry Date (Optional)</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) =>
                      setFormData({ ...formData, end_date: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingCoupon ? "Update Coupon" : "Create Coupon"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coupons.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRedemptions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Discount Given</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalDiscountGiven.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Min Purchase</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-mono font-bold">
                    {coupon.code}
                  </TableCell>
                  <TableCell className="capitalize">{coupon.discount_type}</TableCell>
                  <TableCell>
                    {coupon.discount_type === "percentage"
                      ? `${coupon.discount_value}%`
                      : `₹${coupon.discount_value}`}
                  </TableCell>
                  <TableCell>₹{coupon.min_purchase}</TableCell>
                  <TableCell>
                    {coupon.used_count} / {coupon.usage_limit || "∞"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={coupon.is_active ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => toggleActive(coupon)}
                    >
                      {coupon.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {coupon.end_date
                      ? new Date(coupon.end_date).toLocaleDateString()
                      : "No expiry"}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(coupon)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteMutation.mutate(coupon.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

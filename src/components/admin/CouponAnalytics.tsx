import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, DollarSign, Percent } from "lucide-react";

export const CouponAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalRedemptions: 0,
    totalDiscount: 0,
    averageDiscount: 0,
    topCoupons: [] as any[],
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data: redemptions } = await supabase
        .from("coupon_redemptions")
        .select(`
          *,
          coupons(code, discount_type, discount_value)
        `);

      if (redemptions) {
        const totalDiscount = redemptions.reduce((sum, r) => sum + Number(r.discount_applied), 0);
        
        const couponStats = redemptions.reduce((acc: any, r: any) => {
          const code = r.coupons?.code || "Unknown";
          if (!acc[code]) {
            acc[code] = { code, count: 0, totalDiscount: 0 };
          }
          acc[code].count++;
          acc[code].totalDiscount += Number(r.discount_applied);
          return acc;
        }, {});

        setAnalytics({
          totalRedemptions: redemptions.length,
          totalDiscount,
          averageDiscount: redemptions.length > 0 ? totalDiscount / redemptions.length : 0,
          topCoupons: Object.values(couponStats).sort((a: any, b: any) => b.count - a.count).slice(0, 5),
        });
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalRedemptions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Discount Given</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{analytics.totalDiscount.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Discount</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{analytics.averageDiscount.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.topCoupons}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="code" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" name="Redemptions" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

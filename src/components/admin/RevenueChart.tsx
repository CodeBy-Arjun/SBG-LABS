import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const RevenueChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetchRevenueData();
  }, []);

  const fetchRevenueData = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("project_orders")
        .select("amount, created_at")
        .eq("status", "completed");

      if (error) throw error;

      // Group by month
      const monthlyRevenue: { [key: string]: number } = {};
      
      data?.forEach((order: any) => {
        const date = new Date(order.created_at);
        const monthYear = date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
        monthlyRevenue[monthYear] = (monthlyRevenue[monthYear] || 0) + Number(order.amount);
      });

      const chartData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({
        month,
        revenue,
      }));

      setChartData(chartData);
    } catch (error) {
      console.error("Error fetching revenue data:", error);
    }
  };

  return (
    <Card className="glass-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Revenue Overview
        </CardTitle>
        <CardDescription>Monthly revenue from completed projects</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
            <XAxis 
              dataKey="month" 
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis 
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              formatter={(value: any) => [`₹${value.toLocaleString()}`, "Revenue"]}
            />
            <Bar 
              dataKey="revenue" 
              fill="hsl(var(--primary))" 
              radius={[8, 8, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;

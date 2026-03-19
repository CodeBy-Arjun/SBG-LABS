import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId } = await req.json();
    
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch order details
    const { data: order, error } = await supabaseClient
      .from("project_orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (error || !order) {
      throw new Error("Order not found");
    }

    // Generate HTML invoice
    const invoiceHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      color: #333;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #6D28D9;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #6D28D9;
      margin: 0;
    }
    .invoice-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .info-block {
      flex: 1;
    }
    .info-block h3 {
      color: #6D28D9;
      margin-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #6D28D9;
      color: white;
    }
    .total-row {
      background-color: #f5f5f5;
      font-weight: bold;
      font-size: 18px;
    }
    .discount-row {
      color: #10b981;
    }
    .payment-info {
      background-color: #f9fafb;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 20px;
      border-top: 2px solid #ddd;
      color: #666;
    }
    .status-badge {
      display: inline-block;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: bold;
    }
    .status-paid {
      background-color: #10b981;
      color: white;
    }
    .status-pending {
      background-color: #f59e0b;
      color: white;
    }
    .status-cod {
      background-color: #3b82f6;
      color: white;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>CODE BY ARJUN</h1>
    <p>Professional Web Development Services</p>
    <p>Email: bunnykristipatidhanu123@gmail.com | WhatsApp: 8247505768</p>
  </div>

  <div class="invoice-info">
    <div class="info-block">
      <h3>Invoice Details</h3>
      <p><strong>Invoice Number:</strong> ${order.invoice_number}</p>
      <p><strong>Invoice Date:</strong> ${new Date(order.created_at).toLocaleDateString('en-IN')}</p>
      <p><strong>Order ID:</strong> ${order.id.substring(0, 8)}</p>
    </div>
    <div class="info-block">
      <h3>Bill To</h3>
      <p><strong>${order.client_name}</strong></p>
      <p>Email: ${order.client_email}</p>
      ${order.client_phone ? `<p>Phone: ${order.client_phone}</p>` : ''}
      ${order.college_roll_number ? `<p>Roll No: ${order.college_roll_number}</p>` : ''}
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Project Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>${order.project_title}</strong><br>
          ${order.project_description ? order.project_description.substring(0, 200) + '...' : ''}
        </td>
        <td>₹${order.original_amount || order.amount}</td>
      </tr>
      ${order.is_student_discount ? `
      <tr class="discount-row">
        <td><strong>Student Discount (10%)</strong></td>
        <td>- ₹${((order.original_amount || order.amount) * 0.1).toFixed(2)}</td>
      </tr>
      ` : ''}
      <tr class="total-row">
        <td><strong>TOTAL AMOUNT</strong></td>
        <td><strong>₹${order.amount}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="payment-info">
    <h3>Payment Information</h3>
    <p><strong>Payment Method:</strong> ${order.payment_method ? order.payment_method.toUpperCase() : 'Not Specified'}</p>
    <p><strong>Payment Status:</strong> 
      <span class="status-badge ${
        order.payment_status === 'paid' ? 'status-paid' : 
        order.payment_status === 'cod_pending' ? 'status-cod' : 
        'status-pending'
      }">
        ${order.payment_status ? order.payment_status.toUpperCase().replace('_', ' ') : 'PENDING'}
      </span>
    </p>
    ${order.upi_id ? `<p><strong>UPI ID:</strong> ${order.upi_id}</p>` : ''}
    ${order.transaction_id ? `<p><strong>Transaction ID:</strong> ${order.transaction_id}</p>` : ''}
    ${order.payment_date ? `<p><strong>Payment Date:</strong> ${new Date(order.payment_date).toLocaleDateString('en-IN')}</p>` : ''}
    ${order.payment_status === 'pending' || order.payment_status === 'cod_pending' ? `
    <div style="margin-top: 15px; padding: 10px; background-color: #fef3c7; border-left: 4px solid #f59e0b;">
      <p style="margin: 0;"><strong>Payment Instructions:</strong></p>
      ${order.payment_method === 'upi' ? `
        <p style="margin: 5px 0;">Pay via UPI to: <strong>8247505768@pytes</strong></p>
        <p style="margin: 5px 0;">After payment, share screenshot on WhatsApp: 8247505768</p>
      ` : order.payment_method === 'phone_pay' ? `
        <p style="margin: 5px 0;">Pay via PhonePe to: <strong>8247505768</strong></p>
        <p style="margin: 5px 0;">After payment, share screenshot on WhatsApp: 8247505768</p>
      ` : `
        <p style="margin: 5px 0;">Cash on Delivery - Payment will be collected upon project completion</p>
      `}
    </div>
    ` : ''}
  </div>

  <div class="footer">
    <p><strong>Thank you for choosing Code by Arjun!</strong></p>
    <p>For any queries, contact us at bunnykristipatidhanu123@gmail.com or WhatsApp: 8247505768</p>
    <p style="font-size: 12px; color: #999; margin-top: 20px;">
      This is a computer-generated invoice and does not require a signature.
    </p>
  </div>
</body>
</html>
    `;

    // Update invoice_generated_at timestamp
    await supabaseClient
      .from("project_orders")
      .update({ invoice_generated_at: new Date().toISOString() })
      .eq("id", orderId);

    return new Response(
      JSON.stringify({ 
        html: invoiceHTML,
        invoiceNumber: order.invoice_number
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error generating invoice:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

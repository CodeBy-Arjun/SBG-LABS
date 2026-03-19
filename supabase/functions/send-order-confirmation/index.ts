import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderConfirmationRequest {
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  amount: number;
  requirements: string;
  deliveryTime: string;
  whatsapp: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clientName, clientEmail, projectTitle, amount, requirements, deliveryTime, whatsapp }: OrderConfirmationRequest = await req.json();

    console.log("Sending order confirmation emails...");

    // Send confirmation to client
    if (clientEmail) {
      const clientEmailResponse = await resend.emails.send({
        from: "Code by Arjun <onboarding@resend.dev>",
        to: [clientEmail],
        subject: "Order Confirmation - Code by Arjun",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
                .header { text-align: center; margin-bottom: 30px; }
                .logo { font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .content { margin: 20px 0; }
                .order-details { background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; }
                .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
                .detail-label { font-weight: 600; color: #667eea; }
                .detail-value { color: #555; }
                .highlight { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
                .button { display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; margin: 10px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="logo">🚀 Code by Arjun</div>
                  <h1 style="color: #667eea; margin: 10px 0;">Order Confirmed!</h1>
                </div>
                
                <div class="content">
                  <p>Dear ${clientName},</p>
                  <p>Thank you for placing your order with us! We're excited to work on your project.</p>
                  
                  <div class="highlight">
                    <h2 style="margin: 0 0 10px 0;">Total Amount: ₹${amount.toLocaleString()}</h2>
                    <p style="margin: 0;">Your order has been received and is being processed</p>
                  </div>
                  
                  <div class="order-details">
                    <h3 style="color: #667eea; margin-top: 0;">Order Details</h3>
                    <div class="detail-row">
                      <span class="detail-label">Project:</span>
                      <span class="detail-value">${projectTitle}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">Delivery Time:</span>
                      <span class="detail-value">${deliveryTime}</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">WhatsApp:</span>
                      <span class="detail-value">${whatsapp}</span>
                    </div>
                    <div class="detail-row" style="border: none;">
                      <span class="detail-label">Requirements:</span>
                    </div>
                    <div style="margin-top: 10px; padding: 15px; background: white; border-radius: 8px;">
                      ${requirements}
                    </div>
                  </div>
                  
                  <p><strong>What's Next?</strong></p>
                  <ul>
                    <li>Our team will review your requirements</li>
                    <li>You'll receive a detailed project plan within 24 hours</li>
                    <li>We'll contact you via WhatsApp to discuss further details</li>
                    <li>Development will begin after final confirmation</li>
                  </ul>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://wa.me/8247505768" class="button">Contact Us on WhatsApp</a>
                  </div>
                </div>
                
                <div class="footer">
                  <p>Need help? Reply to this email or reach us on WhatsApp at +91 8247505768</p>
                  <p style="color: #999; font-size: 12px;">© 2025 Code by Arjun. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      console.log("Client email sent:", clientEmailResponse);
    }

    // Send notification to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Code by Arjun Orders <onboarding@resend.dev>",
      to: ["bunnykristipatidhanu123@gmail.com"],
      subject: `🎉 New Order: ${projectTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px; }
              .order-info { background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; }
              .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 8px; }
              .label { font-weight: 600; color: #667eea; display: block; margin-bottom: 5px; }
              .value { color: #555; }
              .amount { font-size: 28px; font-weight: bold; color: #4caf50; text-align: center; margin: 20px 0; }
              .button { display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 10px 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎉 New Project Order!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">You've received a new order</p>
              </div>
              
              <div class="amount">₹${amount.toLocaleString()}</div>
              
              <div class="order-info">
                <div class="info-row">
                  <span class="label">👤 Client Name</span>
                  <span class="value">${clientName}</span>
                </div>
                <div class="info-row">
                  <span class="label">📧 Email</span>
                  <span class="value">${clientEmail || "Not provided"}</span>
                </div>
                <div class="info-row">
                  <span class="label">📱 WhatsApp</span>
                  <span class="value">${whatsapp}</span>
                </div>
                <div class="info-row">
                  <span class="label">🚀 Project</span>
                  <span class="value">${projectTitle}</span>
                </div>
                <div class="info-row">
                  <span class="label">⏰ Delivery Time</span>
                  <span class="value">${deliveryTime}</span>
                </div>
                <div class="info-row">
                  <span class="label">📝 Requirements</span>
                  <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${requirements}</div>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" class="button">💬 Contact Client</a>
                <a href="#" class="button" style="background: #667eea;">📊 View Dashboard</a>
              </div>
              
              <p style="text-align: center; color: #666; margin-top: 30px; font-size: 14px;">
                Order received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending order confirmation emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

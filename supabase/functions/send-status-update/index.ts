import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface StatusUpdateRequest {
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  status: string;
  type: "order" | "appointment";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clientName, clientEmail, projectTitle, status, type }: StatusUpdateRequest = await req.json();

    if (!clientEmail) {
      return new Response(
        JSON.stringify({ success: false, message: "No email provided" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Sending ${type} status update email to ${clientEmail}...`);

    const statusEmoji = status === "completed" || status === "confirmed" ? "✅" : status === "cancelled" ? "❌" : "⏳";
    const statusColor = status === "completed" || status === "confirmed" ? "#4caf50" : status === "cancelled" ? "#f44336" : "#ff9800";
    
    const subjectText = type === "order" ? "Order Status Update" : "Appointment Status Update";
    const itemText = type === "order" ? "order" : "appointment";

    const emailResponse = await resend.emails.send({
      from: "Code by Arjun <onboarding@resend.dev>",
      to: [clientEmail],
      subject: `${statusEmoji} ${subjectText} - ${projectTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
              .header { text-align: center; margin-bottom: 30px; }
              .logo { font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
              .status-badge { display: inline-block; background: ${statusColor}; color: white; padding: 12px 30px; border-radius: 30px; font-size: 20px; font-weight: bold; margin: 20px 0; }
              .content { background: #f8f9fa; border-radius: 12px; padding: 30px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              .button { display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">🚀 Code by Arjun</div>
                <h1 style="color: #667eea; margin: 20px 0;">Status Update</h1>
              </div>
              
              <div style="text-align: center;">
                <div class="status-badge">${statusEmoji} ${status.toUpperCase()}</div>
              </div>
              
              <div class="content">
                <p>Dear ${clientName},</p>
                <p>Your ${itemText} for <strong>${projectTitle}</strong> has been updated to <strong style="color: ${statusColor};">${status}</strong>.</p>
                
                ${status === "completed" || status === "confirmed" ? `
                  <div style="background: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Great news!</strong> ${type === "order" ? "Your project has been completed and is ready for delivery." : "Your appointment has been confirmed."}</p>
                  </div>
                ` : status === "cancelled" ? `
                  <div style="background: #ffebee; border-left: 4px solid #f44336; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0;">Your ${itemText} has been cancelled. If you have any questions, please contact us.</p>
                  </div>
                ` : `
                  <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0;">Your ${itemText} is currently in progress. We'll keep you updated!</p>
                  </div>
                `}
                
                <p>If you have any questions or concerns, feel free to reach out to us via WhatsApp or email.</p>
              </div>
              
              <div style="text-align: center;">
                <a href="https://wa.me/8247505768" class="button">Contact Us on WhatsApp</a>
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

    console.log("Status update email sent:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending status update email:", error);
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

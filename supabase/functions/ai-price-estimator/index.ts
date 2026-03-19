import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { projectType, features } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a pricing expert for "Code by Arjun" web development services.
Base pricing structure:
- Simple Landing Page: ₹2,000
- Portfolio Website: ₹3,000
- E-Commerce Site: ₹5,000
- Booking/Appointment System: ₹4,000
- Admin Dashboard: ₹3,500
- AI Chatbot Integration: ₹4,500
- Full-Stack Web App: ₹6,000

Additional features pricing:
- 3D Animations: +₹1,000
- Advanced Animations: +₹500
- Database Integration: +₹800
- User Authentication: +₹700
- Payment Gateway: +₹1,200
- Responsive Design: +₹400
- SEO Optimization: +₹600
- API Integration: +₹800

Calculate the total price and provide a breakdown. Be precise with numbers.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { 
            role: "user", 
            content: `Calculate price for: ${projectType} with features: ${features.join(", ")}`
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("AI service unavailable");
    }

    const data = await response.json();
    const estimate = data.choices?.[0]?.message?.content || "Unable to estimate";

    return new Response(
      JSON.stringify({ estimate }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

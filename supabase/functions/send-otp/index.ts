import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";
import { Resend } from "https://esm.sh/resend@4.0.0";

// ✅ Fixed: Check RESEND_API_KEY
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  throw new Error("RESEND_API_KEY environment variable is missing");
}
const resend = new Resend(resendApiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendOtpRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  isSignUp: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, isSignUp }: SendOtpRequest = await req.json();
    console.log("Sending OTP to:", email, "isSignUp:", isSignUp);

    // Generate 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // ✅ Fixed: Check Supabase environment variables
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase environment variables are missing");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store OTP in database
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    const { error: insertError } = await supabase
      .from("email_otps")
      .insert({
        email,
        otp_code: otpCode,
        expires_at: expiresAt.toISOString(),
      });

    if (insertError) {
      console.error("Error inserting OTP:", insertError);
      throw insertError;
    }

    // Send email with OTP
    const emailResponse = await resend.emails.send({
      from: "Jharkhand Tourism <onboarding@resend.dev>",
      to: [email],
      replyTo: "arvindyadav7738600@gmail.com",
      subject: isSignUp ? "Your Sign Up OTP Code" : "Your Login OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; margin-bottom: 20px;">
            ${isSignUp ? "Welcome to Jharkhand Tourism!" : "Welcome Back!"}
          </h1>
          ${isSignUp && firstName ? `<p style="color: #666; font-size: 16px;">Hi ${firstName},</p>` : ""}
          <p style="color: #666; font-size: 16px; margin-bottom: 30px;">
            ${isSignUp 
              ? "Thank you for signing up! Use the code below to complete your registration:" 
              : "Use the code below to log in to your account:"}
          </p>
          <div style="background-color: #f5f5f5; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px;">
            <div style="font-size: 36px; font-weight: bold; color: #333; letter-spacing: 8px;">
              ${otpCode}
            </div>
            <p style="color: #999; font-size: 14px; margin-top: 15px;">
              This code expires in 10 minutes
            </p>
          </div>
          <p style="color: #666; font-size: 14px; margin-bottom: 10px;">
            If you didn't request this code, you can safely ignore this email.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Jharkhand Tourism - Explore the Beauty of Jharkhand
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(emailResponse.error.message || "Failed to send email");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "OTP sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-otp function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
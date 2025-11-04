import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyOtpRequest {
  email: string;
  otp: string;
  firstName?: string;
  lastName?: string;
  isSignUp: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, otp, firstName, lastName, isSignUp }: VerifyOtpRequest = await req.json();
    console.log("Verifying OTP for:", email, "isSignUp:", isSignUp);

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify OTP
    const { data: otpData, error: otpError } = await supabase
      .from("email_otps")
      .select("*")
      .eq("email", email)
      .eq("otp_code", otp)
      .eq("verified", false)
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (otpError || !otpData) {
      console.error("Invalid or expired OTP:", otpError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid or expired OTP" 
        }),
        {
          status: 400,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }

    // Mark OTP as verified
    await supabase
      .from("email_otps")
      .update({ verified: true })
      .eq("id", otpData.id);

    // Sign up or sign in user
    if (isSignUp) {
      // Create new user
      const { data: authData, error: signUpError } = await supabase.auth.admin.createUser({
        email,
        email_confirm: true,
        user_metadata: {
          first_name: firstName || "",
          last_name: lastName || "",
        },
      });

      if (signUpError) {
        console.error("Error creating user:", signUpError);
        throw signUpError;
      }

      console.log("User created successfully:", authData.user.id);
      
      // Generate session for the new user
      const { data: sessionData, error: sessionError } = await supabase.auth.admin.generateLink({
        type: 'magiclink',
        email: email,
      });

      if (sessionError) {
        console.error("Error generating session:", sessionError);
        throw sessionError;
      }

      return new Response(
        JSON.stringify({ 
          success: true,
          user: authData.user,
          message: "Sign up successful"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    } else {
      // Sign in existing user - generate magic link
      const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
        type: 'magiclink',
        email: email,
      });

      if (linkError) {
        console.error("Error generating magic link:", linkError);
        throw linkError;
      }

      return new Response(
        JSON.stringify({ 
          success: true,
          message: "Login successful",
          action_link: linkData.properties.action_link
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
  } catch (error: any) {
    console.error("Error in verify-otp function:", error);
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

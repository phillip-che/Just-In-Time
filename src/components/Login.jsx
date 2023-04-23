import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../client.js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import "../styles/Login.css"

const Login = () => {

  return (
    <div className="login-container">
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{
          extend: false,
          variables: {
            default: {
              colors: {
                brand: "#E4425E",
                brandAccent: "FBC2C6",
              },
            },
          },
          className: {
            input: "login-input",
            label: "login-label",
            button: "login-submit-button",
            container: "auth-container",
          },
        }}
      />
    </div>
  )
};

export default Login;

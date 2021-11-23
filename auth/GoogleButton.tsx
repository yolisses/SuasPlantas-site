import { useEffect, useRef } from "react";
import { useGoogleSignIn } from "./useGoogleSignIn";

export function GoogleButton() {
  function coisa() {
    console.log("coisado");
  }

  return (
    <div>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-ux_mode="popup"
        data-context="signin"
        data-auto_prompt="false"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      ></div>
      <div
        data-width="20"
        data-shape="pill"
        data-size="large"
        data-text="signin"
        data-type="standard"
        data-callback="e=>{console.error(e);console.error('oi')}"
        className="g_id_signin"
        data-theme="filled_blue"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}

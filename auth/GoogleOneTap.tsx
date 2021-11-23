import { useGoogleSignIn } from "./useGoogleSignIn";

export function GoogleOneTap() {
  const { onSuccess, ref } = useGoogleSignIn();

  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-context="signin"
        data-auto_select="true"
        ref={ref}
        data-close_on_tap_outside="false"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      ></div>
    </>
  );
}

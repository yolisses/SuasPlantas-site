export function GoogleButton() {
  return (
    <div>
      <div
        id="g_id_onload"
        data-ux_mode="popup"
        data-context="signin"
        data-auto_prompt="false"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      />
      <div
        data-shape="pill"
        data-size="large"
        data-text="signin"
        data-type="standard"
        data-callback="mozao"
        className="g_id_signin"
        data-theme="filled_blue"
        data-logo_alignment="left"
      />
    </div>
  );
}

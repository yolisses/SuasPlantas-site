import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";

export const SignInScreen = observer(() => {
  async function onSuccess(response: GoogleLoginResponse) {
    const { id_token } = response.getAuthResponse(true);
    const res = await api.post("auth/sign-in", { googleToken: id_token });
    auth.user = res.data.user;
  }

  return (
    <div>
      <div>Use uma conta para prosseguir</div>
      {JSON.stringify(auth.user)}
      <div onClick={onSuccess}>massa</div>
      <GoogleLogin
        clientId="418682635969-4hldgfuc6r8b3d9baaaapkbpblnfj5o8.apps.googleusercontent.com"
        buttonText={"Continuar com o Google"}
        onSuccess={onSuccess}
      />
    </div>
  );
});

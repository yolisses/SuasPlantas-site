import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";
import { useAuth } from "./AuthContext";
import { Header } from "../common/Header";

export const SignInScreen = observer(() => {
  const { user, setUser } = useAuth();

  async function onSuccess(response: GoogleLoginResponse) {
    const { id_token } = response.getAuthResponse(true);
    const res = await api.post("auth/sign-in", { googleToken: id_token });
    setUser!(res.data.user);
  }

  return (
    <div>
      <Header />
      <div>Use uma conta para prosseguir</div>
      {JSON.stringify(user)}
      <div onClick={onSuccess}>massa</div>
      <GoogleLogin
        clientId="418682635969-4hldgfuc6r8b3d9baaaapkbpblnfj5o8.apps.googleusercontent.com"
        buttonText={"Continuar com o Google"}
        onSuccess={onSuccess}
      />
    </div>
  );
});

import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";
import { useAuth } from "./AuthContext";
import { Header } from "../common/Header";

export const SignInScreen = observer(() => {
  const { user, setUser } = useAuth();

  async function onSuccess(response: GoogleLoginResponse) {
    const { access_token } = response.getAuthResponse(true);
    const res = await api.post("google-sign-in", { access_token });
    console.log(res);
    setUser!(res.data.user);
  }

  return (
    <div className="flex flex-1">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div>Use uma conta para prosseguir</div>
        {JSON.stringify(user)}
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID as string}
          buttonText={"Continuar com o Google"}
          onSuccess={onSuccess}
        />
        <div className="h-14" />
      </div>
    </div>
  );
});

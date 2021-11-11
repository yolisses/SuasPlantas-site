import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";
import { useAuth } from "./AuthContext";
import { Header } from "../common/Header";

export const SignInScreen = observer(() => {
  const { user, setUser } = useAuth();

  async function onSuccess(response: GoogleLoginResponse) {
    try {
      const { access_token } = response.getAuthResponse(true);
      console.error(access_token);
      const res = await api.post("google-sign-in", { access_token });
      console.error(res);
      setUser!(res.data.user);
    } catch (err) {
      console.error(err);
    }
  }

  async function onFailure(error: any) {
    console.error(error);
  }

  return (
    <div className="flex flex-1">
      <Header />
      <div className="flex flex-1 items-center justify-center gap-1">
        <div>Use uma conta para prosseguir</div>
        {JSON.stringify(user)}
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
          buttonText={"Continuar com o Google"}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        <div className="h-14" />
      </div>
    </div>
  );
});

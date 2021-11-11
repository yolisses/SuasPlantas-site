import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";
import { Header } from "../common/Header";
import { useData } from "../mobx/DataContext";

export const SignInScreen = observer(() => {
  const { auth } = useData();

  async function onSuccess(response: GoogleLoginResponse) {
    try {
      const { access_token } = response.getAuthResponse(true);
      console.error(access_token);
      const res = await api.post("google-sign-in", { access_token });
      console.error(res);

      const { user, token, refreshToken } = res.data;
      Object.apply(auth, { user, token, refreshToken });
      auth.user = res.data.user;
      auth.token = res.data.token;
      auth.refreshToken = res.data.redirectToken;
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
        {JSON.stringify(auth.user)}
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

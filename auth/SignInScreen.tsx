import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { observer } from "mobx-react";
import { api } from "../api/api";
import { Header } from "../common/Header";
import { useData } from "../mobx/DataContext";

type success = (
  response: GoogleLoginResponse | GoogleLoginResponseOffline
) => void;

export const SignInScreen = observer(() => {
  const { auth } = useData();

  async function onSuccess(response: GoogleLoginResponse) {
    try {
      const { access_token, id_token } = response.getAuthResponse(true);
      console.log(access_token);
      console.log(id_token);
      const res = await api.post("google-sign-in", { access_token });
      console.log(res);
      auth.user = res.data.user;
      auth.token = res.data.access_token;
      auth.refreshToken = res.data.refresh_token;
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
          onSuccess={onSuccess as success}
          onFailure={onFailure}
        />
        <div className="h-14" />
      </div>
    </div>
  );
});

import GoogleLogin from "react-google-login";
import { auth } from "./auth";
import { observer } from "mobx-react";

export const SignInScreen = observer(() => {
  function onSuccess() {
    auth.user = { name: "ulisses" };
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

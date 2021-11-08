import GoogleLogin from "react-google-login";

export function SignInScreen() {
  function onSuccess() {
    console.log("foi");
  }

  return (
    <div>
      <GoogleLogin
        clientId="418682635969-4hldgfuc6r8b3d9baaaapkbpblnfj5o8.apps.googleusercontent.com"
        buttonText={"Continuar com o Google"}
        onSuccess={onSuccess}
      />
    </div>
  );
}

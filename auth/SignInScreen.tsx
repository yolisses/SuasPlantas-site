import { observer } from "mobx-react";
import { Header } from "../common/Header";
import { useData } from "../mobx/DataContext";
import { GoogleButton } from "./GoogleButton";
import { GoogleOneTap } from "./GoogleOneTap";

export const SignInScreen = observer(() => {
  const { auth } = useData();
  return (
    <div className="flex flex-1">
      <Header />
      <div className="flex flex-1 items-center justify-center gap-1">
        <div>Use uma conta para prosseguir</div>
        {JSON.stringify(auth.user)}
        <GoogleButton />
        <GoogleOneTap />
        <div className="h-14" />
      </div>
    </div>
  );
});

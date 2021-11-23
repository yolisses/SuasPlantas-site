import { api } from "../api/api";
import { useData } from "../mobx/DataContext";
import { Auth } from "./auth";

export interface googleResponse {
  credential: string;
}

export async function signInWithGoogle(e: googleResponse, auth: Auth) {
  const idToken = e.credential;
  const res = await api.post("google-sign-in", { idToken });
  console.log(res);
  auth.user = res.data.user;
  auth.token = res.data.access_token;
  auth.refreshToken = res.data.refresh_token;
}

export function useGoogleSignIn() {
  const { auth } = useData();

  async function onSuccess(e) {
    console.error("aqui");
    console.error(e);
    // signInWithGoogle(e, auth);
  }

  return { onSuccess };
}

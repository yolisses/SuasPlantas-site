import { gql, useMutation } from "@apollo/client";
import { Header } from "../common/Header";

export function ConfigPage() {
  const [logOut] = useMutation(
    gql`
      mutation {
        logOut
      }
    `,
    {
      refetchQueries: ["me"],
    }
  );

  function handleClick() {
    logOut();
  }

  return (
    <div>
      <Header />
      <div
        onClick={handleClick}
        className="p-3 hover:bg-black hover:bg-opacity-5 m-2 rounded-lg cursor-pointer text-red-500"
      >
        Log Out
      </div>
    </div>
  );
}

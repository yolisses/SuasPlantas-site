import { api } from "../../api/api";
import { UserScreen } from "../../user/UserScreen";

export default UserScreen;
export const getServerSideProps = async () => {
  const res = await api.get("users/me" );
  return {
    props: { user: res.data },
  };
};

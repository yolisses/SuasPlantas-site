import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../api/api";
import { UserScreen } from "../../user/UserScreen";

export default UserScreen;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get("users/" + params!.id);
  return {
    props: { user: res.data },
  };
};

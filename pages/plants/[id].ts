import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../api/api";
import { ShowScreen } from "../../show/ShowScreen";

export default ShowScreen;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await api.get("plants/" + params!.id);

  return {
    props: { data: res.data },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "123" },
      },
    ],
    fallback: "blocking",
  };
};

import { GetStaticPaths } from "next";
import { ShowScreen } from "../../show/ShowScreen";

export default ShowScreen;

interface Params {
  id: string;
}

export async function getStaticProps({ params }: { params: Params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

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

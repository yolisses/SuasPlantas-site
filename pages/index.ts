import { GetStaticProps } from "next";
import { api } from "../api/api";
import { HomeScreen } from "../home/HomeScreen";

export default HomeScreen;

export const getStaticProps: GetStaticProps = async () => {
  // const res = await api.get('plants')
  // console.log(res.data)
  return {
    props: { data: [] },
    revalidate: 1,
  };
};

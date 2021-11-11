import { api } from "../api/api";
import { HomeScreen } from "../home/HomeScreen";

export default HomeScreen;

export async function getStaticProps(context) {
  const res = await api.get("plants");

  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}

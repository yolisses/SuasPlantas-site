import { api } from "../api/api";
import { HomeScreen } from "../home/HomeScreen";

export default HomeScreen;

export async function getStaticProps(context) {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  const res = await api.get("plants");

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { data: [  ] }, // will be passed to the page component as props
  };
}

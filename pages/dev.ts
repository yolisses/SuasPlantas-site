import { DevScreen } from "../dev/DevScreen";

export default DevScreen;

export function getStaticProps() {
  return {
    props: {
      notFound: process.env.NODE_ENV === "production",
    },
  };
}

import { DevScreen } from "../dev/DevScreen";

export default DevScreen;

export function getStaticProps() {
  return {
    props: {
      notFound: process.env.NEXT_PUBLIC_ENV !== "development",
    },
  };
}

import { useRef } from "react";
import { Banner, CategoryList, Footer, Trending, SkinCare } from "../components";

const Home = () => {
  const catRef = useRef(null);
  return (
    <>
      <Banner catRef={catRef} />
      <Trending />
      <CategoryList catRef={catRef} />
      <SkinCare />
      <Footer />
    </>
  );
};

export default Home;

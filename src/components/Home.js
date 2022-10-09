import Hero from "./Hero";
import Blogs from "./Blogs";
import useFetch from "../hooks/useFetch";
import "../styles/Loading.css";
import Footer from "./Footer";

const Home = () => {
  const props = useFetch();

  return (
    <div className="home-component">
      <Hero />
      {props.isPending && <div className="loading"></div>}
      {!props.isPending && <Blogs blog={props}></Blogs>}
      <Footer />
    </div>
  );
};

export default Home;

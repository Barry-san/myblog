import Hero from "./Hero";
import Blogs from "./Blogs";
import useFetch from "../hooks/useFetch";
import "../styles/Loading.css";

const Home = () => {
  const props = useFetch();

  return (
    <div className="home-component">
      <Hero />
      {props.isPending && <div className="loading"></div>}
      {!props.isPending && <Blogs blog={props}></Blogs>}
    </div>
  );
};

export default Home;

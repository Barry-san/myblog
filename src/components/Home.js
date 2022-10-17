import Hero from "./Hero";
import Blogs from "./Blogs";
// import useFetch from "../hooks/useFetch";
import "../styles/Loading.css";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div className="home-component">
      <Hero />
      {props.props.isPending && <div className="loading"></div>}
      {!props.props.isPending && <Blogs blog={props.props}></Blogs>}
      <Footer />
    </div>
  );
};

export default Home;

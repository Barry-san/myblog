import Blogcard from "./Blogcard";
import "../styles/Blogs.css";

const Blogs = (props) => {
  return (
    <div className="Blogs">
      {console.log(props.blog)}
      {props.blog.data.map((blog) => {
        return <Blogcard blog={blog}></Blogcard>;
      })}
    </div>
  );
};

export default Blogs;

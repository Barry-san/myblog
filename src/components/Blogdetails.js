import { useParams } from "react-router-dom";
import "../styles/Blogdetails.css";

const Blogdetails = (props) => {
  const { id } = useParams();
  const [blog] = props.props.data.filter((blog) => {
    return blog.id === id;
  });
  return (
    <div className="blogdetails">
      <div className="blog-heading">
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
      </div>

      <div className="blog-content">
        <blockquote>{blog.content}</blockquote>
      </div>
    </div>
  );
};

export default Blogdetails;

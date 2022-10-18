import { useParams } from "react-router-dom";

const Blogdetails = (props) => {
  const { id } = useParams();
  const [blog] = props.props.data.filter((blog) => {
    return blog.id === id;
  });
  return (
    <div className="blogdetails">
      {!props.props.isPending && <h2>{blog.title}</h2>}
      <p>{blog.author}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blogdetails;

import { Link } from "react-router-dom";

const Blogcard = (prop) => {
  return (
    <div className="blogcard">
      <Link to={`/blog/${prop.blog.id}`}>
        <p style={{ margin: 0 }}>
          <strong> {prop.blog.author}</strong>
        </p>
        <h2>{prop.blog.title}</h2>
        <p>{prop.blog.description}</p>
      </Link>
    </div>
  );
};

export default Blogcard;

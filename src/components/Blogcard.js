const Blogcard = (prop) => {
  return (
    <div className="blogcard">
      <p style={{ margin: 0 }}>
        <strong> {prop.blog.author}</strong>
      </p>
      <h2>{prop.blog.title}</h2>
      <p>{prop.blog.description}</p>
    </div>
  );
};

export default Blogcard;

const Blogcard = (prop) => {
  return (
    <div className="blogcard">
      <p style={{ margin: 0 }}>
        <i> BarryCarlsen</i>
      </p>
      <h2>{prop.blog.title}</h2>

      <p>{prop.blog.description}</p>
      {/* <p>{prop.blog.id}</p> */}
    </div>
  );
};

export default Blogcard;

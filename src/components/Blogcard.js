const Blogcard = (prop) => {
  return (
    <div className="blogcard">
      <h2>{prop.blog.title}</h2>
      <p>
        <i>written by BarryCarlsen</i>
      </p>
      <p>{prop.blog.description}</p>
      <p>{prop.blog.id}</p>
    </div>
  );
};

export default Blogcard;

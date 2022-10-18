import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="children image-box"></div>
      <div className="children">
        <div className="text">
          <div className="title">
            <h2>Unleash your Creativity</h2>
            {/* <p className="author"> */}
            {/* <i>written by BarryFischer</i> */}
            {/* </p> */}
          </div>
          <p>
            “There is no doubt that creativity is the most important human
            resource of all. Without creativity, there would be no progress, and
            we would be forever repeating the same patterns.” - Edward De Bono
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

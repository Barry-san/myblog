import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footlinks">
          <a
            href="https://github.com/barry-san"
            target="blank"
            className="footlink one"
          >
            GitHub
          </a>
          <a
            href="twitter.com/barry9ja"
            target="blank"
            className="footlink two"
          >
            Twitter
          </a>
          <a href="https://discord.com" className="footlink three">
            Discord
          </a>
        </div>
        <div className="sitename">
          <p>BANKAI</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <h1 className="footer-logo">MT</h1>

      <p>Made by: Maurice R. Tañeca</p>

      <div className="socmed-container">
        <a
          href="https://www.linkedin.com/in/maurice-ta%C3%B1eca-986067255/"
          className="footer-link"
          target="_blank"
        >
          <img
            className="ftr-img"
            src={require("./assets/linkedin.png")}
            alt="linkedin img"
          />
        </a>

        <a
          href="https://github.com/pokemau"
          className="footer-link"
          target="_blank"
        >
          <img
            className="ftr-img"
            src={require("./assets/github-logo.png")}
            alt="github img"
          />
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;

const Technologies = () => {
  return (
    <div className="technologies">
      <h1 className="tech-h">Technologies/Frameworks</h1>
      <div className="tech-list">
        <div className="list-container">
          <img src={require("./assets/js.png")} className="list-img" alt="" />
          <p>Javascript</p>
        </div>
        <div className="list-container">
          <img src={require("./assets/html.png")} className="list-img" alt="" />
          <p>HTML</p>
        </div>
        <div className="list-container">
          <img src={require("./assets/css.png")} className="list-img" alt="" />
          <p>CSS</p>
        </div>
        <div className="list-container">
          <img
            src={require("./assets/react.png")}
            className="list-img"
            alt=""
          />
          <p>React JS</p>
        </div>
        <div className="list-container">
          <img src={require("./assets/gh.png")} className="list-img" alt="" />
          <p>Git/Github</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

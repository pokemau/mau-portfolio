const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="project-h">Projects</h1>
      <div className="projects-list">
        <div className="project">
          <img
            className="proj-img"
            src={require("./assets/flaschardo1.png")}
            alt="flashcardo img"
          />
          <h1 className="proj-title">Flashcardo</h1>
          <p className="proj-desc">
            A simple flashcard app where it can be used by the user to quiz
            themselves when studying for an upcoming quiz or exam. It uses the
            browser's local storage to store flashcard sets which can be
            deleted.
          </p>
          <div className="tech-used">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>

          <div className="redirect-links-container">
            <a
              href="https://github.com/pokemau/flashcardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="redirect-img"
                src={require("./assets/github-logo.png")}
                alt=""
              />
            </a>
            <a
              href="https://pokemau.github.io/flashcardo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="redirect-img"
                src={require("./assets/go-to-icon.png")}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="project">
          <img
            className="proj-img"
            src={require("./assets/lolchamps.png")}
            alt="flashcardo img"
          />
          <h1 className="proj-title">LOL Champa</h1>
          <p className="proj-desc">
            A web app made with ReactJS which shows the basic information of a
            champion in the famous MOBA game League of Legends. The data is
            downloaded from the League of Legends
          </p>
          <div className="tech-used">
            <p>REACTJS</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>

          <div className="redirect-links-container">
            <a
              href="https://github.com/pokemau/lol-champs-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="redirect-img"
                src={require("./assets/github-logo.png")}
                alt=""
              />
            </a>
            <a
              href="https://pokemau.github.io/lol-champs-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="redirect-img"
                src={require("./assets/go-to-icon.png")}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

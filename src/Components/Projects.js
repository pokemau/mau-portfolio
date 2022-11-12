import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="project-h">Projects</h1>
      <div className="projects-list">
        {/* PROJECT 1 */}
        <div className="project">
          <a
            href="https://pokemau.github.io/flashcardo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="proj-img"
              src={require("../assets/flaschardo1.png")}
              alt="flashcardo img"
            />
          </a>

          <h1 className="proj-title">Flashcardo</h1>
          <p className="proj-desc">
            A simple flashcard app where it can be used by the user to quiz
            themselves when studying for an upcoming quiz or exam. It uses the
            browser's local storage to store flashcard sets which can be deleted
            by the user.
          </p>
          <div className="tech-used">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>

            <div className="redirect-links-container">
              <a
                href="https://github.com/pokemau/flashcardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
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
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project">
          <a
            href="https://pokemau.github.io/lol-champs-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="proj-img"
              src={require("../assets/lolchamps.png")}
              alt="flashcardo img"
            />
          </a>

          <h1 className="proj-title">LOL Champa</h1>
          <p className="proj-desc">
            A web app made with ReactJS which shows the basic information of a
            champion in the famous MOBA game League of Legends. The data is
            downloaded from Riot Game's data dragon.
          </p>
          <div className="tech-used">
            <p>REACTJS</p>
            <p>HTML</p>
            <p>CSS</p>

            <div className="redirect-links-container">
              <a
                href="https://github.com/pokemau/lol-champs-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
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
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project">
          <a
            href="https://pokemau.github.io/instagramClone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="proj-img"
              src={require("../assets/instaclone.png")}
              alt="flashcardo img"
            />
          </a>

          <h1 className="proj-title">Instagram Clone</h1>
          <p className="proj-desc">A simple site</p>
          <div className="tech-used">
            <p>HTML</p>
            <p>CSS</p>

            <div className="redirect-links-container">
              <a
                href="https://github.com/pokemau/instagramClone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
                  alt=""
                />
              </a>
              <a
                href="https://pokemau.github.io/instagramClone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project">
          <a
            href="https://lepitenbojos.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="proj-img"
              src={require("../assets/lepitenbojos.png")}
              alt="lepitenbojos img"
            />
          </a>

          <h1 className="proj-title">Law Firm Website</h1>
          <p className="proj-desc">A simple site</p>
          <div className="tech-used">
            <p>WORDPRESS</p>

            <div className="redirect-links-container">
              <a
                href="https://lepitenbojos.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

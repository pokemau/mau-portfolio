import pic from "../assets/my_pic.jpg";
import "./Home.css";

//component imports
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="body-container">

      <div className="info-container">
        <img className="my-img" src={pic} alt="slamm pic" />

        <div className="intro-text-container">
          <h2 className="intro-h">SLAMM KHELMER A. LUAB</h2>
          <p className="intro-p">Game Developer</p>

          <br />

          <p className="intro-text">
            Currently a Computer Science student at Cebu Institute of
            Technology. Programming has been my passion since the day I found

            out about it. I am very interested in learning the ins and outs of systems and creating my own.
            I am eager to learn more about developing my own software for everyone to use.
          </p>
          <p className="intro-text"></p>
        </div>
      </div>

      {/* ADD LATER */}
      {/* <Technologies /> */}

      <Projects />
    </div>
  );
};

export default Home;

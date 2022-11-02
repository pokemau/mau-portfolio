import pic from './assets/meow.jpg';


const Home = () => {
   return (
      <div className="body-container">
         <div className="info-container">
            <img className="my-img" src={pic} alt="maurice" />
            <div className="intro-text-container">
               <h2>Maurice R. Tañeca</h2>
               <p style={{paddingBottom: ".5em"}} >Frontend Developer</p>

               <br />
               <p>Currently a Computer Science student at Cebu Institute of Technology.
                  Programming has been my passion since the day I found out about it.
               </p>
               <br />
               <p>Eager to learn more to expand my knowledge as a developer and grow.</p>
            </div>
         </div>

         <div className="technologies">
            <h1>Technologies/Frameworks</h1>
            <div className="tech-list">
               <p>Javascript</p>
               <p>HTML</p>
               <p>CSS</p>
               <p>React.js</p>
               <p>Python</p>
               <p>Linux</p>
               <p>Git/Github</p>
            </div>
         </div>
      </div>
   ); 
};

export default Home;
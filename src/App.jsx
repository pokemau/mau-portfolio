import { Routes, Route} from 'react-router-dom';
//component imports
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
   return (
      <div className="App">
         <Navbar/>
         <div className="content">
            <Routes>
               <Route exact path="/" element={<Home />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/projects" element={<Projects />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;

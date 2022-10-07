import Footer from './footer/footer';
import {GlobalStyles} from '../global.styles';
import { Route, Routes,useLocation} from 'react-router-dom';
import Home from './Home/Home.component';
import Project from './Projects/projects.component';
import Writing from './Writing/writing.component';
import {AnimatePresence} from "framer-motion";


const  App = () => {
  const location = useLocation();
    
    return (
    <div className="App">
      <GlobalStyles/>
         <Footer/>
         <main>
          <AnimatePresence exitBeforeEnter>   
         <Routes location={location} key={location.key}>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/projects" element={<Project/>}/>
          <Route exact path ="/writing" element={<Writing/>}/>
        </Routes>
        </AnimatePresence>
         </main>
    </div>
  )};

export default App;

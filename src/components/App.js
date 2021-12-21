
import Footer from './footer/footer';
import {GlobalStyles} from '../global.styles';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home.component';
import Project from './Projects/projects.component';
import Writing from './Writing/writing.component';



const  App = () => (
    <div className="App">
      <GlobalStyles/>
         <Footer/>
         <main>
         <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/projects" element={<Project/>}/>
          <Route exact path ="/writing" element={<Writing/>}/>
        </Routes>
         </main>
    </div>
  );

export default App;

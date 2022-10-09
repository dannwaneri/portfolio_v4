import React from "react";
import Footer from './footer/footer';
import {GlobalStyles} from '../global.styles';
import {motion} from "framer-motion";


const  Layout = ({children}) => {
    
    return (
    <div className="App">
      <GlobalStyles/>
         <Footer/>
         <motion.main
         initial={{ opacity: 0, x: -200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         transition={{
           type: "spring",
           mass: 0.35,
           stiffness: 75,
           duration: 0.3
         }}>

          {children}
         </motion.main>
    </div>
  )};

export default Layout;

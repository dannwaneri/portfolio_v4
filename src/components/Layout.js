import React from "react";
import Footer from './footer/footer';
import {GlobalStyles} from '../global.styles';
import {motion} from "framer-motion";
import styled from "styled-components";


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
          <Wrapper>

          {children}
          </Wrapper>
         </motion.main>
    </div>
  )};

export default Layout;

const Wrapper = styled.div`
position: relative;
    margin: 0px auto;
    width: 100%;
    max-width: 672px;
`

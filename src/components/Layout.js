import React from "react";
import Footer from './footer/footer';
import {motion} from "framer-motion";
import {GlobalStyles} from '../global.styles';
import styled from "styled-components";

const containerVariants = {
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        transition:{
            delay:1.5, duration:1.5
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut'
        }
    }
}

const  Layout = ({children}) => {
    
    return (
    <>
       <Footer/>
       <GlobalStyles/>
         <motion.main
variant={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
          <Wrapper>

          {children}
          </Wrapper>
         </motion.main>
    </>
  )};

export default Layout;

const Wrapper = styled.div`
position: relative;
    margin: 0px auto;
    width: 100%;
    max-width: 672px;
`

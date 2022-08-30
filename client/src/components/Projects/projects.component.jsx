import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import ProjectLists from "./ProjectLists";
import { 
    NameContainer,
    TitleContainer
} from '../Home/home.style';


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

const Project = () => {
    const [Projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('/v1/projects')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setProjects(data);
      })
    }, 1000);
  }, [])

    return(
    <motion.div 
    variant={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <NameContainer>Projects</NameContainer>
    <TitleContainer>
    Know how many projects he has released up until now? zero.This is going to change. He wants to release Open Source Projects and personal projects he has been working on. We will see how it goes, until then.
</TitleContainer>
{ isPending && <div>Loading...</div> }
  {Projects && <ProjectLists Projects={Projects}/>}
</motion.div>
)}

export default Project;

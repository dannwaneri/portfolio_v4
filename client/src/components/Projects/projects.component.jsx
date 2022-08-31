import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import ProjectLists from "./ProjectLists";

import {
  ProjectTitle,
  ProjectHeading,
  Load
} from './Project.style';


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
    <ProjectHeading>Projects</ProjectHeading>
    <ProjectTitle>
    Internet thingies built with React, Next.js Node.js, and TypeScript.
</ProjectTitle>
{ isPending && <Load>...</Load> }
  {Projects && <ProjectLists Projects={Projects}/>}
</motion.div>
)}

export default Project;

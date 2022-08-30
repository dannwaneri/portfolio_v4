import { 
    ProjectName, 
    ProjectDes,
    LinkWrapper,
    ProjectList
    } from "./Project.style";

const ProjectLists = ({ Projects }) => {
    return (
      <ProjectList>
        {Projects.map(Project => (
          <LinkWrapper key={Project._id}>
            <ProjectName>{ Project.name }</ProjectName>
            <ProjectDes>{ Project.description }</ProjectDes>
          </LinkWrapper>
        ))}
      </ProjectList>
    );
  }
   
  export default ProjectLists;
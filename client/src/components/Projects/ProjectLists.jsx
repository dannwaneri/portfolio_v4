import { 
    ProjectName, 
    LinkWrapper,
    ProjectList
    } from "./Project.style";

const ProjectLists = ({ Projects }) => {
    return (
      <ProjectList>
        {Projects.map(Project => (
          <LinkWrapper key={Project._id}>
            <ProjectName>{ Project.name }</ProjectName>
          </LinkWrapper>
        ))}
      </ProjectList>
    );
  }
   
  export default ProjectLists;
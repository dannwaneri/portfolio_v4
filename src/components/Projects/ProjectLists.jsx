import { 
    ProjectName, 
    LinkWrapper,
    ProjectList,
    ProjectDes,
    DottedLine,
    DateWrapper
    } from "./Project.style";

const ProjectLists = ({ Projects }) => {
    return (
      <ProjectList>
        {Projects.map(Project => (
          <LinkWrapper key={Project._id}>
            <ProjectName>{ Project.name }</ProjectName>
            <ProjectDes>{Project.description }</ProjectDes>
            <DottedLine/>
            <DateWrapper>{Project.date}</DateWrapper>
          </LinkWrapper>
        ))}
      </ProjectList>
    );
  }
   
  export default ProjectLists;
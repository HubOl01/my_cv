import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import bg_github from "../../images/bg_github.png";
import { projectsData } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectRelatedProjects = ({ project }) => {
  // const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Другие проекты
      </p>

      <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4	xl:grid-cols-4 2xl:grid-cols-4 gap-10">
        {projectsData.map((otherProject) => {
          return project.id === otherProject.id ? (
            <></>
          ) : (
            <Link to={`/projects/${otherProject.id}`}>
              <img
                src={
                  otherProject.url_background != null
                    ? otherProject.url_background
                    : bg_github
                }
                className="rounded-xl cursor-pointer border-none w-full"
                style={{
                  height: "160px",
                  objectFit: "cover",
                  minWidth: "170px",
                }}
                alt={otherProject.title}
                key={otherProject.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;

import bg_github from "../../assets/bg_github.png";
import { projectsData } from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectRelatedProjects = ({ project }) => {
  // Фильтруем проекты, исключая текущий проект
  const relatedProjects = projectsData.filter(
    (otherProject) => otherProject.id !== project.id
  );

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Другие проекты
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {relatedProjects.map((otherProject) => (
          <Link to={`/my_cv/projects/${otherProject.id}`} key={otherProject.id}>
            <img
              src={
                otherProject.url_background != null
                  ? otherProject.url_background
                  : bg_github
              }
              className="rounded-xl cursor-pointer border-none w-full h-full"
              style={{
                height: "160px",
                // minHeight: "160px",
                maxHeight: "200px",
                objectFit: "cover",
                minWidth: "170px",
              }}
              alt={otherProject.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;

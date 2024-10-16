import { FiTag } from "react-icons/fi";
/* eslint-disable */
const ProjectSingleHeader = ({ project }) => {
  return (
    <div>
      <p className="flex content-end mt-14 sm:mt-20 mb-7">
        {project.url_icon != null && project.url_icon != "" ? (
          <img
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            src={project.url_icon}
            onDragStart={(event) => event.preventDefault()}
          ></img>
        ) : (
          <></>
        )}
        <div className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-2 sm:mt-5 mb-7">
          {project.title}
        </div>
      </p>
      <div className="flex">
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;

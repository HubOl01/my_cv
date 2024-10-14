import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import { Platforms } from "../../data/projects";
const ProjectInfo = ({ project }) => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {project.title}
          </p>
          <ul className="leading-loose">
            <li
              className="font-general-regular text-ternary-dark dark:text-ternary-light"
              //   key={info.id}
            >
              <span>Разработчик: </span>
              <a
                // className={
                //   info.title === "Website" || info.title === "Phone"
                //     ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                //     : ""
                // }
                aria-label="Project Website and Phone"
              >
                {project.creator}
              </a>
            </li>
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
            Краткое описание
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
            Инструменты и технологии
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.fullStack.join(", ")}
          </p>
        </div>
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
            Платформы
          </p>
          <div className="flex">
            {project.platforms.map((platform) => (
              <p
                className="font-general-regular text-primary-dark dark:text-ternary-light"
                style={{
                  padding: "3px 10px",
                  width: "fit-content",
                  color: "white",
                  borderRadius: "20px",
                  marginRight: "7px",
                  backgroundColor:
                    Platforms.Android === platform
                      ? "rgba(37, 177, 1, 1)"
                      : Platforms.IOS === platform
                      ? "rgba(50, 50, 50, 0.576)"
                      : Platforms.Windows === platform
                      ? "rgba(48, 114, 255, 0.761)"
                      : Platforms.Web === platform
                      ? "rgba(0, 238, 255, 0.761)"
                      : "rgba(127, 127, 127, 0.547)",
                  fontSize: "small",
                }}
              >
                {platform}
              </p>
            ))}
          </div>
        </div>
        {/* Single project social sharing */}
        {/* <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {singleProjectData.ProjectInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="__blank"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              );
            })}
          </div>
        </div> */}
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData.ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;

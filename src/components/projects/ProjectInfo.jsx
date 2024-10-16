import { Platforms } from "../../data/projects";
import { Img_icon } from "../../components/Img_icon";
import { FaGithub } from "react-icons/fa";
import RustoreIcon from "../../assets/rustore.png";
import HuaweiIcon from "../../assets/appgallery.png";
import GetAppsIcon from "../../assets/getapp.png";
import { BsGlobe2 } from "react-icons/bs";
/* eslint-disable */
const ProjectInfo = ({ project }) => {
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
              <strong>Разработчик: </strong>
              <a aria-label="developer">{project.creator}</a>
            </li>
          </ul>
        </div>

        {/* Single project objectives */}

        <div className="mb-7">
          <p className="font-general-regular text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
            Краткое описание
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.shortDescription}
          </p>
        </div>

        <div className="mb-7">
          <p className="font-general-regular text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
            Ссылки
          </p>
          <div className="flex">
            <a
              href={project.url_sources[0]}
              style={{ color: "black" }}
              onDragStart={(event) => event.preventDefault()}
            >
              <FaGithub
                className="dark:text-ternary-light"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                }}
              />
            </a>
            {project.url_stores != null ? (
              project.url_stores.map((store) => (
                <a
                  href={store}
                  style={{ color: "black" }}
                  onDragStart={(event) => event.preventDefault()}
                >
                  {store.includes("rustore") ? (
                    <Img_icon icon={RustoreIcon}></Img_icon>
                  ) : store.includes("huawei") ? (
                    <Img_icon icon={HuaweiIcon}></Img_icon>
                  ) : store.includes("app.mi") ? (
                    <Img_icon icon={GetAppsIcon}></Img_icon>
                  ) : store == "/" ? (
                    <BsGlobe2
                      size={40}
                      className="text-primary-dark dark:text-ternary-light"
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <></>
                  )}
                </a>
              ))
            ) : (
              <></>
            )}
          </div>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light"></p>
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
          Описание проекта
        </p>
        {project.description.map((line, index) => {
          // Если строка начинается с "##", рендерим как заголовок
          if (line.startsWith("##")) {
            return (
              <div
                key={index}
                className="font-general-semibold mt-5 mb-5 text-xl text-ternary-dark dark:text-ternary-light"
              >
                {line.replace("## ", "")}
              </div>
            );
          }
          if (line.startsWith("-")) {
            return (
              <p
                key={index}
                className="font-general-regular mb-0 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {line}
              </p>
            );
          }

          // Иначе рендерим как обычный параграф
          return (
            <p
              key={index}
              className="font-general-regular mt-5 mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {line}
            </p>
          );
        })}

        {/* {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              
            </p>
          );
        })} */}
      </div>
    </div>
  );
};

export default ProjectInfo;

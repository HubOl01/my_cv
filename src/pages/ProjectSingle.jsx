import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { useParams } from "react-router-dom";
// const ProjectSingle = () => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1, delay: 1 }}
// 			transition={{
// 				ease: 'easeInOut',
// 				duration: 0.6,
// 				delay: 0.15,
// 			}}
// 			className="container mx-auto mt-5 sm:mt-10"
// 		>
// 			<SingleProjectProvider>
// 				<ProjectHeader />
// 				<ProjectGallery />
// 				<ProjectInfo />
// 				<ProjectRelatedProjects />
// 			</SingleProjectProvider>
// 		</motion.div>
// 	);
// };

// export default ProjectSingle;

const ProjectSingle = () => {
  const { id } = useParams();

  //   const project = projectsData.find(
  //     (project) => project.id.toLowerCase() === id.toLowerCase()
  //   );
  const project = projectsData.filter(
    (project) => project.id.toString() === id
  )[0];
  if (!project) {
    return (
      <div className="font-general-regular mb-0 text-lg text-center text-ternary-dark dark:text-ternary-light">
        Проект не найден
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        {/* Передаем найденный проект в дочерние компоненты */}
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectInfo project={project} />
        <ProjectRelatedProjects project={project} />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;

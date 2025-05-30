import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`/projects/${project.id}`} aria-label={project.id}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none w-full"
              style={{ height: "210px", objectFit: "cover" }}
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <div className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </div>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;

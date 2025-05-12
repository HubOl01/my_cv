// import { Horizontable } from "../Horizontable";
// import { category, Platforms } from "../../data/projects";
// const ProjectGallery = ({ project }) => {
//   /* eslint-disable */
//   var web = project.category === category[1];
//   return (
//     <Horizontable>
//       <div
//         className="flex flex-wrap gap-4 py-4 mt-12"
//         style={{ maxWidth: 300 }}
//       >
//         {project.video != null ? (
//           <div key={project.id} className="flex-shrink-0 w-64">
//             <video
//               className="rounded-xl cursor-pointer shadow-lg"
//               src={project.video}
//               controls
//               onDragStart={(event) => event.preventDefault()}
//               style={{
//                 maxHeight: "300px",
//                 minWidth: web ? "530px" : "210px",
//               }}
//             />
//           </div>
//         ) : (
//           <></>
//         )}
//         {project.url_images.map((img, index) => (
//           <div key={index} className="flex-shrink-0 w-64">
//             <img
//               className="rounded-xl cursor-pointer shadow-lg"
//               src={img}
//               alt={`Image ${index + 1}`}
//               onDragStart={(event) => event.preventDefault()}
//               style={{
//                 minHeight: "300px",
//                 minWidth:
//                   project.platforms == Platforms.Web ? "500px" : "200px",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </Horizontable>
//   );
// };

// export default ProjectGallery;

import { Horizontable } from "../Horizontable";
import { category } from "../../data/projects";
import ProjectGalleryWeb from "./ProjectGalleryWeb";
import ProjectGalleryMobile from "./ProjectGalleryMobile";

const ProjectGallery = ({ project }) => {
  var web = project.category === category[1];
  return (
    <Horizontable>
      {web ? (
        <ProjectGalleryWeb project={project} />
      ) : (
        <ProjectGalleryMobile project={project} />
      )}
    </Horizontable>
  );
};

export default ProjectGallery;

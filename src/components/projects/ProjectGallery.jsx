import { Horizontable } from "../Horizontable";
const ProjectGallery = ({ project }) => {
  //   const { singleProjectData } = useContext(SingleProjectContext);

  return (
    // <div className="flex overflow-x-scroll space-x-10 py-4 scrollbar-hide">
    //   {project.url_images.map((img) => (
    //     <div key={img} className="flex-none w-64">
    //       <img
    //         className="w-full h-auto object-cover rounded-lg"
    //         src={img}
    //         alt={img}
    //         onDragStart={(event) => event.preventDefault()}
    //       />
    //     </div>
    //   ))}
    // </div>

    // <div
    //   className="flex overflow-x-auto overflow-x-scroll gap-4 grid-cols-1 py-4 sm:grid-cols-3 mt-12"
    //   style={{ width: 500 }}
    // >
    //   {project.url_images.map((img, index) => (
    //     <div
    //       key={index}
    //       className="flex-shrink-0" // 'flex-shrink-0' предотвращает сжатие, 'w-64' задает фиксированную ширину
    //     >
    //       <img
    //         style={{ minWidth: 200, minHeight: 300 }}
    //         className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
    //         src={img}
    //         alt={`Image ${index + 1}`}
    //       />
    //     </div>
    //   ))}
    // </div>
    <Horizontable>
      <div
        className="flex flex-wrap gap-4 py-4 mt-12"
        style={{ maxWidth: 300 }}
      >
        {project.url_images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <img
              className="rounded-xl cursor-pointer shadow-lg"
              src={img}
              alt={`Image ${index + 1}`}
              onDragStart={(event) => event.preventDefault()}
              style={{ minHeight: "300px", minWidth: "200px" }} // Высота по максимуму, ширина авто
            />
          </div>
        ))}
      </div>
    </Horizontable>

    // <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    //   {project.url_images.map((image) => {
    //     return (
    //       <div className="mb-10 sm:mb-0" key={project.id}>
    //         <img
    //           src={image}
    //           className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
    //           //   alt={project.title}
    //           //   key={project.id}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default ProjectGallery;

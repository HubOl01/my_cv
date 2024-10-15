import { Horizontable } from "../Horizontable";
const ProjectGallery = ({ project }) => {
  return (
    <Horizontable>
      <div
        className="flex flex-wrap gap-4 py-4 mt-12"
        style={{ maxWidth: 300 }}
      >
        {project.video != null ? (
          <div key={project.id} className="flex-shrink-0 w-64">
            <video
              className="rounded-xl cursor-pointer shadow-lg"
              src={project.video}
              controls
              onDragStart={(event) => event.preventDefault()}
              style={{ minHeight: "300px", minWidth: "210px" }}
            />
          </div>
        ) : (
          <></>
        )}
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
  );
};

export default ProjectGallery;

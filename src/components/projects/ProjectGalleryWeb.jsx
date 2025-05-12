export default function ProjectGalleryWeb({ project }) {
  return (
    <div
      className="flex flex-wrap gap-4 py-4 mt-12"
      style={{ maxWidth: "100%" }}
    >
      {project.video != null ? (
        <div
          key={project.id}
          className="flex-shrink-0 relative"
          style={{
            width: "500px",
            height: "300px",
            marginRight: "25px",
          }}
        >
          <video
            className="rounded-xl cursor-pointer shadow-lg object-cover w-full h-full"
            src={project.video}
            controls
            onDragStart={(event) => event.preventDefault()}
            style={{
              maxHeight: "300px",
              minWidth: "530px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ) : (
        <></>
      )}
      {project.url_images.map((img, index) => (
        <div
          key={index}
          className="flex-shrink-0 relative"
          style={{
            width: "500px",
            height: "300px",
          }}
        >
          <a href={img} target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-xl cursor-pointer shadow-lg object-cover w-full h-full"
              src={img}
              alt={`Project preview ${index + 1}`}
              onDragStart={(event) => event.preventDefault()}
              style={{
                minHeight: "300px",
                minWidth: "500px",
                width: "100%",
                height: "100%",
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

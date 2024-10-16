const AboutCertificateSingle = ({ title, image }) => {

  return (
    <>
      <a href={image}>
        <img
          loading="lazy"
          src={image}
          className="w-64 py-0 px-0 bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
          alt={title}
        />
      </a>
    </>
  );
};

export default AboutCertificateSingle;

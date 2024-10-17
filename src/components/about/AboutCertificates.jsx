import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutCertificateSingle from "./AboutCertificateSingle";

const AboutCertificates = () => {
  const { certificatesData, certificatesHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
        {certificatesHeading}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {certificatesData.map((certificate) => (
          <AboutCertificateSingle
            title={certificate.title}
            image={certificate.img}
            key={certificate.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCertificates;

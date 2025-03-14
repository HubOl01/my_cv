import { useState, createContext } from "react";
import { certificatesHeading as certificatesPageHeading } from "../data/certificatesData";
import { certificatesData as certificatesDataJson } from "../data/certificatesData";
import { skillsHeading as skillsPageHeading } from "../data/skillsData";
import { skillsData as skillsDataJson } from "../data/skillsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const certificatesHeading = certificatesPageHeading;

  const [certificatesData, setCertificatesData] =
    useState(certificatesDataJson);

  const skillsHeading = skillsPageHeading;

  const [skillsData, setSkillsData] = useState(skillsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        certificatesHeading,
        certificatesData,
        setCertificatesData,
        skillsHeading,
        skillsData,
        setSkillsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;

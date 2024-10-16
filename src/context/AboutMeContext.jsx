import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { certificatesHeading as certificatesPageHeading } from "../data/certificatesData";
import { certificatesData as certificatesDataJson } from "../data/certificatesData";
import { skillsHeading as skillsPageHeading } from "../data/skillsData";
import { skillsData as skillsDataJson } from "../data/skillsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const certificatesHeading = certificatesPageHeading;

  const [certificatesData, setCertificatesData] =
    useState(certificatesDataJson);

  const skillsHeading = skillsPageHeading;

  const [skillsData, setSkillsData] = useState(skillsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
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

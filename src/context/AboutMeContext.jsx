import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { certificatesHeading as certificatesPageHeading } from '../data/certificatesData';
import { certificatesData as certificatesDataJson } from '../data/certificatesData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const certificatesHeading = certificatesPageHeading;

	const [certificatesData, setCertificatesData] = useState(certificatesDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				certificatesHeading,
				certificatesData,
				setCertificatesData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;

const AboutCertificateSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-0 px-0  bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutCertificateSingle;

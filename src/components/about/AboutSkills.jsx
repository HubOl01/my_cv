import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutSkills = () => {
  const { skillsData, skillsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light ">
        {skillsHeading}
      </p>
      <div className="overflow-hidden rounded-lg">
        <table className="table-auto w-full border-collapse mt-10 sm:mt-14 bg-clip-border">
          <thead>
            <tr className="bg-gray-300 dark:bg-gray-700 text-xl sm:text-md text-primary-dark dark:text-primary-light">
              <th className="border px-4 py-2 text-center rounded-tl-lg">
                Категории
              </th>
              <th className="border px-4 py-2 text-center rounded-tr-lg">
                Скиллы
              </th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((skill, index) => (
              <tr
                key={index}
                className="border-t text-md sm:text-md text-primary-dark dark:text-primary-light"
              >
                <td className="border px-4 py-2">{skill.title}</td>
                <td className="border px-4 py-2">{skill.skills.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutSkills;

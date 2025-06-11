const selectOptions = [
  "Mobile-приложение",
  "Web-приложение",
  "Desktop-приложение",
];

// const ProjectsFilter = ({ setSelectProject }) => {
//   return (
//     <select
//       onChange={(e) => {
//         setSelectProject(e.target.value);
//       }}
//       className="font-general-medium
//                   px-4
//                   sm:px-6
//                   border
//                   dark:border-secondary-dark
//                   rounded-lg
//                   text-sm
//                   sm:text-md
//                   dark:font-medium
//                   bg-secondary-light
//                   dark:bg-ternary-dark
//                   text-primary-dark
//                   dark:text-ternary-light
// 				  appearance-none
//       			pr-10
//               "
//       style={{ appearance: "none" }}
//       size={0.5}
//     >
//       <option value={setSelectProject} className="text-sm sm:text-md">
//         All Projects
//       </option>

//       {selectOptions.map((option) => (
//         <option className="text-normal sm:text-md" key={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default ProjectsFilter;
const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
                pr-10  
                relative
                appearance-none
                "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23${
          document.documentElement.classList.contains("dark")
            ? "e2e8f0"
            : "1f2937"
        }' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        backgroundSize: "16px 16px",
        appearance: "none",
      }}
    >
      <option value={setSelectProject} className="text-sm sm:text-md">
        Все проекты
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;

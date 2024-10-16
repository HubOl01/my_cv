import profileImage from "../../assets/about/Photox4.jpg";
// import { useContext } from 'react';
// import AboutMeContext from '../../context/AboutMeContext';
const about = [
  "Я программист с опытом разработки более 5 лет. Начинал с С++ и консольных приложений, затем перешёл к веб-разработке на HTML/CSS. Понял, что хочу развиваться дальше, и изучил C# и Xamarin (сейчас MAUI), чтобы заняться мобильной разработкой.",
  "После этого я выбрал Flutter для мобильной разработки, и это стало моим основным занятием. На Flutter я разработал более 20 проектов, среди которых «My Songbook» для гитаристов и певцов и «Мой универ — ИГХТУ» для студентов ИГХТУ.",
  "Однако я не останавливаюсь на достигнутом и постоянно изучаю новые языки и инструменты для разработки. Среди них Jetpack Compose (Kotlin), NestJS (Typescript) и React (Typescript), который я использовал для создания веб-сайта, на котором вы находитесь сейчас.",
  "Также я активно участвую в различных хакатонах, акселераторах и других мероприятиях. Это помогает мне развивать свои навыки и получать новый опыт.",
  "Я считаю, что программист должен постоянно развиваться и изучать новые технологии, так как сфера разработки быстро меняется. Это позволяет быть в курсе последних тенденций и не зависеть от конкретной платформы.",
];

const AboutMeBio = () => {
  // const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {about.map((text) => (
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            {text}
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;

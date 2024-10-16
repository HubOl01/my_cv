import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
function careersCounter() {
  const startDate = new Date(2022, 9, 1);
  const currentDate = new Date();
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();

  return yearsDiff;
}
function experienceCounter() {
  const startDate = new Date(2019, 9, 1);
  const currentDate = new Date();
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();

  return yearsDiff;
}
function getYearWord(years) {
  if (years % 10 === 1 && years % 100 !== 11) {
    return "год";
  } else if (
    years % 10 >= 2 &&
    years % 10 <= 4 &&
    (years % 100 < 10 || years % 100 >= 20)
  ) {
    return "года";
  } else {
    return "лет";
  }
}
const AboutCounter = () => {
  useCountUp({
    ref: "experienceCounter",
    end: experienceCounter(),
    duration: 2,
  });
  useCountUp({ ref: "projectsOrdersCounter", end: 20, duration: 2 });
  useCountUp({ ref: "careersCounter", end: careersCounter(), duration: 2 });
  useCountUp({ ref: "projectCounter", end: 40, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="опыта разработки"
          counter={<span id="experienceCounter" />}
          measurement={getYearWord(experienceCounter())}
        />

        <CounterItem
          title="всего проектов"
          leading=">"
          counter={<span id="projectCounter" />}
        />

        <CounterItem
          title="опыта работы"
          counter={<span id="careersCounter" />}
          measurement={getYearWord(careersCounter())}
        />

        <CounterItem
          title={
            <div>
              заказов различной сложности <br />
              успешно завершены
            </div>
          }
          leading=">"
          counter={<span id="projectsOrdersCounter" />}
        />
      </div>
    </div>
  );
};

export default AboutCounter;

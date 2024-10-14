import icon_MyS from "../images/My_projects/My_Songbook/my_songbook.png";
import bg_MyS from "../images/My_projects/My_Songbook/image16_9.png";
import img1_MyS from "../images/My_projects/My_Songbook/screens/ru/screen_1.jpg";
import img2_MyS from "../images/My_projects/My_Songbook/screens/ru/screen_2.jpg";
import img3_MyS from "../images/My_projects/My_Songbook/screens/ru/screen_3.jpg";
import img4_MyS from "../images/My_projects/My_Songbook/screens/ru/screen_4.jpg";
import icon_MyU from "../images/My_projects/Мой_универ/icon.png";
import bg_MyU from "../images/My_projects/Мой_универ/bg_img.png";
import img1_MyU from "../images/My_projects/Мой_универ/screens/screen_1.png";
import img2_MyU from "../images/My_projects/Мой_универ/screens/screen_2.png";
import img3_MyU from "../images/My_projects/Мой_универ/screens/screen_3.png";
import img4_MyU from "../images/My_projects/Мой_универ/screens/screen_4.png";
import img5_MyU from "../images/My_projects/Мой_универ/screens/screen_5.png";
import img6_MyU from "../images/My_projects/Мой_универ/screens/screen_6.png";
import icon_MyH from "../images/My_projects/MyAppHome/logotip.png";
import bg_MyH from "../images/My_projects/MyAppHome/bg_img.png";
import img1_MyH from "../images/My_projects/MyAppHome/screens/screen_1.png";
import img2_MyH from "../images/My_projects/MyAppHome/screens/screen_2.png";
import img3_MyH from "../images/My_projects/MyAppHome/screens/screen_3.png";
import img4_MyH from "../images/My_projects/MyAppHome/screens/screen_4.png";
import img5_MyH from "../images/My_projects/MyAppHome/screens/screen_5.png";
import img6_MyH from "../images/My_projects/MyAppHome/screens/screen_6.png";
import img7_MyH from "../images/My_projects/MyAppHome/screens/screen_7.png";
// import icon_CA from '';
// import bg_CA from '../images/My_projects/Мой универ - ИГХТУ/bg_img.png';
import img1_CA from "../images/My_projects/City_Adventures/screens/screen_1.jpg";
import img2_CA from "../images/My_projects/City_Adventures/screens/screen_2.jpg";
import img3_CA from "../images/My_projects/City_Adventures/screens/screen_3.jpg";
import img4_CA from "../images/My_projects/City_Adventures/screens/screen_4.png";
import bg_CA from "../images/My_projects/City_Adventures/bg_CA.png";
import icon_CA from "../images/My_projects/City_Adventures/icon_app.jpg";
import bg_MyCV from "../images/My_projects/My_CV/my_cv.png";

export const nickname = "ru-developer";

const category = ["Mobile Application", "Web Application"];

export const Platforms = Object.freeze({
  Android: "Android",
  IOS: "IOS",
  Windows: "Windows",
  Linux: "Linux",
  Web: "Web",
});

// Перечисление для FullStack технологий
export const FullStack = Object.freeze({
  Flutter: "Flutter",
  Dart: "Dart",
  Kotlin: "Kotlin",
  Jetpack_Compose: "Jetpack Compose",
  Winforms: "Winforms",
  C_sharp: "C#",
  React: "React",
  Typescript: "Typescript",
  Retrofit: "Retrofit",
  PHP: "PHP",
  SQLite: "SQLite",
  SQL: "SQL",
  MySQL: "MySQL",
  PostgreSQL: "PostgreSQL",
  Git: "Git",
  HTML: "HTML",
  CSS: "CSS",
  SCSS: "SCSS",
  Vite: "Vite",
  NestJS: "NestJS",
  Prisma: "Prisma",
});

export const projectsData = [
  {
    id: 1,
    title: "My Songbook",
    category: category[0],
    description: [
      "My Songbook – это творческая мастерская в вашем кармане. Независимо от того, являетесь ли вы гитаристом, певцом, композитором или просто энтузиастом музыки, это приложение поможет вам воплотить ваши музыкальные идеи в жизнь.",
      "\n",
      "Основные возможности:",
      "\n",
      "- Записывайте и редактируйте песни: Создавайте музыку в любое время, в любом месте. Записывайте мелодии, добавляйте тексты и настраивайте аранжировки – все это в вашем распоряжении.",
      "- Справочник аккордов для гитары: Независимо от вашего уровня мастерства, наше приложение предлагает обширный справочник аккордов для гитары. Найдите нужный аккорд и создайте свой собственный уникальный звук.",
      "- Автоскролл и легкая навигация: Никогда больше не теряйтесь в тексте. Функция автоскролла позволяет вам сконцентрироваться на музыке, а не на прокрутке текста.",
      "- Делитесь своей музыкой: Поделитесь своими произведениями с миром через социальные сети непосредственно из приложения. Позвольте всем услышать вашу творческую энергию.",
      "- Аудиофайлы с песнями: Сохраняйте свои композиции в виде аудиофайлов. Прослушивайте их в любое время или отправляйте друзьям и коллегам.",
      "\n",
      "Почему выбрать My Songbook?",
      "\n",
      "- Простота и удобство: Даже если вы начинающий музыкант, вы сможете создавать профессиональные композиции с легкостью.",
      "- Безопасное хранение ваших произведений: Ваши записи остаются конфиденциальными. Спокойно работайте над своими идеями, зная, что они в безопасности.",
      "\n",
      "Неважно, вы начинающий музыкант или профессионал, My Songbook поможет вам создать и поделиться музыкой, которая касается сердец. Начните свое музыкальное путешествие сегодня!",
    ],
    url_background: bg_MyS,
    url_icon: icon_MyS,
    url_images: [img1_MyS, img2_MyS, img3_MyS, img4_MyS],
    url_stores: [
      "https://apps.rustore.ru/app/ru.ru_developer.my_songbook",
      "https://appgallery.huawei.com/app/C109087129",
      "https://global.app.mi.com/details?lo=RU&la=en_US&id=ru.ru_developer.my_songbook.mi",
    ],
    url_sources: ["https://github.com/HubOl01/my_songbook"],
    creator: nickname,
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 2,
    title: "Мой универ - ИГХТУ",
    category: category[0],
    description: [
      '"Мой универ - ИГХТУ" - это мобильное приложение, специально разработанное для студентов Ивановского государственного химико-технологического университета. Вы теперь сможете посмотреть расписание пар даже без интернета! Также можно получать уведомления об информации пар каждый день. В приложении также доступны заметки и вы можете записывать лекции, делать пометки, прикреплять ссылки и также делиться ими.',
      "\n",
      "Основные функции приложения:",
      "\n",
      "- Календарь с расписанием пар на текущий день",
      "- Расписание лекций, практик и семинаров",
      "- Новости ВУЗа",
      "- Вход в moodle ИГХТУ",
      "- Расписание преподавателей, сессий",
      "- Поисковик",
      "- Заметки, конспекты",
      "- Уведомления об информации пар на каждый день",
      "\n",
      "Также приложение адаптировано под планшеты      ",
    ],
    url_background: bg_MyU,
    url_icon: icon_MyU,
    url_images: [img1_MyU, img2_MyU, img3_MyU, img4_MyU, img5_MyU, img6_MyU],
    url_stores: [
      "https://apps.rustore.ru/app/ru.ru_developer.my_university_isuct",
    ],
    url_sources: ["https://github.com/HubOl01/my_university_isuct"],
    creator: nickname,
    fullStack: [FullStack.Flutter, FullStack.Dart, FullStack.PHP],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 3,
    title: "MyAppHome",
    description: ["Приложение для многоквартирных домов"],
    url_icon: icon_MyH,
    category: category[0],
    url_background: bg_MyH,
    url_images: [
      img1_MyH,
      img2_MyH,
      img3_MyH,
      img4_MyH,
      img5_MyH,
      img6_MyH,
      img7_MyH,
    ],
    url_sources: ["https://github.com/HubOl01/AppMyHome"],
    creator: "Создано вместе с командой OVERLAGO",
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 4,
    title: "City Adventures",
    category: category[0],
    url_icon: icon_CA,
    url_background: bg_CA,
    description: [
      "City Adventures - это захватывающее мобильное приложение, которое превращает вашу прогулку по городу в увлекательное приключение! Исследуйте свой город совершенно по-новому, обнаруживая его забытые и малоизвестные жемчужины.",
      "\n",
      "Особенности:",
      "Интерактивная карта: Приложение предоставляет вам доступ к интерактивной карте вашего города, на которой отмечены достопримечательности и скрытые сокровища.",
      "\n",
      "Получайте достижения и опыт: Посещая места и достопримечательности, вы зарабатываете достижения и опыт, что делает каждую поездку еще увлекательнее.",
      "\n",
      "Исторические факты: Узнайте увлекательные исторические факты о каждой достопримечательности благодаря нашей информативной базе данных.",
      "\n",
      "Соревнования с друзьями: Соревнуйтесь с друзьями и семьей, чтобы узнать, кто может найти больше мест и заработать больше достижений.",
      "\n",
      "Почему City Adventures?",
      "City Adventures поможет вам:",
      "Новым способом взглянуть на свой город.",
      "Провести время с семьей и друзьями с увлекательными маршрутами.",
      "Насладиться обучающими историческими фактами.",
      "Повысить уровень активности и исследовательских навыков.",
      "Присоединяйтесь к нам в City Adventures и начните увлекательное путешествие по вашему городу уже сегодня!",
    ],
    url_images: [img1_CA, img2_CA, img3_CA, img4_CA],
    url_sources: ["https://github.com/HubOl01/CityAdventures"],
    creator: "Создано с командой на хакатоне",
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  // {
  //   id: 5,
  //   title: "Bellisemo",
  //   category: category[1],
  //   description: ["Student project for study architectural technologies"],
  //   url_icon: "",
  //   url_images: [],
  //   url_sources: [],
  //   creator: "Student project",
  //   fullStack: [FullStack.React, FullStack.Typescript],
  //   platforms: [Platforms.Web],
  //   color: "",
  // },
  {
    id: 5,
    title: "WeatherKotlin",
    category: category[0],
    description: ["Student project for study kotlin jetpack compose"],
    url_icon: "",
    url_images: [],
    url_sources: ["https://github.com/HubOl01/WeatherKotlin"],
    creator: nickname,
    fullStack: [
      FullStack.Jetpack_Compose,
      FullStack.Kotlin,
      FullStack.Retrofit,
    ],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 6,
    title: "My CV",
    category: category[1],
    description: ["Вебсайт для показа своих проектов, которые мы видим здесь"],
    url_icon: "",
    url_background: bg_MyCV,
    url_images: [],
    url_stores: [],
    url_sources: ["https://github.com/HubOl01/my_profile"],
    creator: nickname,
    fullStack: [FullStack.React, FullStack.Typescript],
    platforms: [Platforms.Web],
    color: "",
  },
];

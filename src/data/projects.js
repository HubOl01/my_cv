import icon_MyS from "../assets/My_projects/My_Songbook/my_songbook.png";
import bg_MyS from "../assets/My_projects/My_Songbook/image16_9.png";
import img1_MyS from "../assets/My_projects/My_Songbook/screens/ru/screen_1.jpg";
import img2_MyS from "../assets/My_projects/My_Songbook/screens/ru/screen_2.jpg";
import img3_MyS from "../assets/My_projects/My_Songbook/screens/ru/screen_3.jpg";
import img4_MyS from "../assets/My_projects/My_Songbook/screens/ru/screen_4.jpg";
import icon_MyU from "../assets/My_projects/Мой_универ/icon.png";
import bg_MyU from "../assets/My_projects/Мой_универ/bg_img.png";
import img1_MyU from "../assets/My_projects/Мой_универ/screens/screen_1.png";
import img2_MyU from "../assets/My_projects/Мой_универ/screens/screen_2.png";
import img3_MyU from "../assets/My_projects/Мой_универ/screens/screen_3.png";
import img4_MyU from "../assets/My_projects/Мой_универ/screens/screen_4.png";
import img5_MyU from "../assets/My_projects/Мой_универ/screens/screen_5.png";
import img6_MyU from "../assets/My_projects/Мой_универ/screens/screen_6.png";
import icon_MyH from "../assets/My_projects/MyAppHome/logotip.png";
import bg_MyH from "../assets/My_projects/MyAppHome/bg_img.png";
import img1_MyH from "../assets/My_projects/MyAppHome/screens/Житель/1.png";
import img2_MyH from "../assets/My_projects/MyAppHome/screens/Житель/2.png";
import img3_MyH from "../assets/My_projects/MyAppHome/screens/Житель/3.png";
import img4_MyH from "../assets/My_projects/MyAppHome/screens/Житель/4.png";
import img5_MyH from "../assets/My_projects/MyAppHome/screens/Житель/5.png";
import img6_MyH from "../assets/My_projects/MyAppHome/screens/Житель/6.png";
import img7_MyH from "../assets/My_projects/MyAppHome/screens/Житель/7.png";
import img8_MyH from "../assets/My_projects/MyAppHome/screens/Житель/8.png";
import img9_MyH from "../assets/My_projects/MyAppHome/screens/УК/УК2.png";
import img10_MyH from "../assets/My_projects/MyAppHome/screens/УК/УК3.png";
// import icon_CA from '';
// import bg_CA from '../assets/My_projects/Мой универ - ИГХТУ/bg_img.png';
import img1_CA from "../assets/My_projects/City_Adventures/screens/screen_1.jpg";
import img2_CA from "../assets/My_projects/City_Adventures/screens/screen_2.jpg";
import img3_CA from "../assets/My_projects/City_Adventures/screens/screen_3.jpg";
import img4_CA from "../assets/My_projects/City_Adventures/screens/screen_4.png";
import bg_CA from "../assets/My_projects/City_Adventures/bg_CA.png";
import icon_CA from "../assets/My_projects/City_Adventures/icon_app.jpg";
import bg_MyCV from "../assets/My_projects/My_CV/my_cv.png";
import bg_LQ from "../assets/My_projects/LinguaQuest/bg_image.png";
import icon_LQ from "../assets/My_projects/LinguaQuest/app_icon.png";
import video_LQ from "../assets/My_projects/LinguaQuest/accelerator.mp4";
import img1_LQ from "../assets/My_projects/LinguaQuest/screen_1.png";
import img2_LQ from "../assets/My_projects/LinguaQuest/screen_2.png";
import img3_LQ from "../assets/My_projects/LinguaQuest/screen_3.png";
import img4_LQ from "../assets/My_projects/LinguaQuest/screen_4.png";
import img5_LQ from "../assets/My_projects/LinguaQuest/screen_5.png";
import img6_LQ from "../assets/My_projects/LinguaQuest/screen_6.png";
import img7_LQ from "../assets/My_projects/LinguaQuest/screen_7.png";
import img8_LQ from "../assets/My_projects/LinguaQuest/screen_8.png";
import img9_LQ from "../assets/My_projects/LinguaQuest/screen_9.png";
import img1_Weather from "../assets/My_projects/WeatherKotlin/search.png";
import img2_Weather from "../assets/My_projects/WeatherKotlin/weather.png";
import bg_Weather from "../assets/My_projects/WeatherKotlin/bg_img.png";

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
  Winforms: "Windows Forms .NET",
  C_sharp: "C#",
  React: "React",
  Python: "Python",
  Typescript: "Typescript",
  Javascript: "Javascript",
  Retrofit: "Retrofit",
  PHP: "PHP",
  SQFlite: "sqflite",
  get: "get",
  flutter_bloc: "flutter_bloc",
  flutter_local_notifications: "flutter_local_notifications",
  workmanager: "workmanager",
  flutter_quill: "flutter_quill",
  http: "http",
  Audioplayers: "Audioplayers",
  Firebase: "Firebase",
  SQL: "SQL",
  MySQL: "MySQL",
  MSSQL: "MS SQL",
  SQLite: "SQLite",
  PostgreSQL: "PostgreSQL",
  MongoDB: "MongoDB",
  ClickHouse: "ClickHouse",
  Git: "Git",
  HTML: "HTML5",
  CSS: "CSS",
  SCSS: "SCSS",
  Vite: "Vite",
  NestJS: "NestJS",
  Prisma: "Prisma",
  Swagger: "Swagger",
  REST_API: "REST API",
  MaterialUI: "Material UI",
  Bootstrap: "Bootstrap",
  Tailwind: "Tailwind CSS",
  Drawio: "Draw.io",
  GitBash: "Git Bash",
  GitHubDesktop: "GitHub Desktop",
  VSCodeRemote: "VS Code Remote",
  SSH: "SSH",
  Lighthouse: "Lighthouse",
  FlutterDevTools: "Flutter DevTools",
});

export const projectsData = [
  {
    id: 1,
    title: "My Songbook",
    category: category[0],
    shortDescription:
      "Творческое приложение для музыкантов любого уровня. Позволяет записывать и редактировать песни, находить аккорды для гитары, делиться музыкой с миром. Сохраняет композиции в аудиофайлы. Обеспечивает лёгкую навигацию и безопасное хранение произведений.",
    description: [
      "My Songbook – это творческая мастерская в вашем кармане. Независимо от того, являетесь ли вы гитаристом, певцом, композитором или просто энтузиастом музыки, это приложение поможет вам воплотить ваши музыкальные идеи в жизнь.",
      "\n",
      "## Основные возможности:",
      "\n",
      "- Записывайте и редактируйте песни: Создавайте музыку в любое время, в любом месте. Записывайте мелодии, добавляйте тексты и настраивайте аранжировки – все это в вашем распоряжении.",
      "- Справочник аккордов для гитары: Независимо от вашего уровня мастерства, наше приложение предлагает обширный справочник аккордов для гитары. Найдите нужный аккорд и создайте свой собственный уникальный звук.",
      "- Автоскролл и легкая навигация: Никогда больше не теряйтесь в тексте. Функция автоскролла позволяет вам сконцентрироваться на музыке, а не на прокрутке текста.",
      "- Делитесь своей музыкой: Поделитесь своими произведениями с миром через социальные сети непосредственно из приложения. Позвольте всем услышать вашу творческую энергию.",
      "- Аудиофайлы с песнями: Сохраняйте свои композиции в виде аудиофайлов. Прослушивайте их в любое время или отправляйте друзьям и коллегам.",
      "\n",
      "## Почему выбрать My Songbook?",
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
    fullStack: [
      FullStack.Flutter,
      FullStack.Dart,
      FullStack.SQFlite,
      FullStack.get,
      FullStack.Audioplayers,
    ],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 2,
    title: "Мой универ - ИГХТУ",
    category: category[0],
    shortDescription:
      "Мобильное приложение для студентов ИГХТУ. Позволяет просматривать расписание пар без интернета, получать уведомления, делать заметки и делиться лекциями. Основные функции: календарь, расписание, новости, вход в moodle, расписание преподавателей, поисковик, заметки, уведомления.",
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
      "Также приложение адаптировано под планшеты",
    ],
    url_background: bg_MyU,
    url_icon: icon_MyU,
    url_images: [img1_MyU, img2_MyU, img3_MyU, img4_MyU, img5_MyU, img6_MyU],
    url_stores: [
      "https://apps.rustore.ru/app/ru.ru_developer.my_university_isuct",
    ],
    url_sources: ["https://github.com/HubOl01/my_university_isuct"],
    creator: nickname,
    fullStack: [
      FullStack.Flutter,
      FullStack.Dart,
      FullStack.PHP,
      FullStack.SQFlite,
      FullStack.get,
      FullStack.flutter_bloc,
      FullStack.flutter_local_notifications,
      FullStack.workmanager,
      FullStack.flutter_quill,
      FullStack.http,
    ],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 3,
    title: "MyAppHome",
    shortDescription: "Приложение для многоквартирных домов",
    description: [
      "“Мой дом” - приложение для коммуникации между управляющими компаниями и жильцами многоквартирных домов, которое решает проблему эффективности коммуникации.",
      "Функционал приложения:",
      "- Возможность оплаты коммунальных услуг через приложение",
      "- Возможность оставить заявку",
      "- Онлайн-опросы",
      "Дополнительные функции:",
      "- Уведомления о плановых и аварийных отключениях",
      "- Проведение общих собраний собственников и голосований с составлением официального протокола",
      "- Доступ управляющих организаций к данным “умных” приборов учёта коммунальных ресурсов и системам контроля протечек воды и утечек газа",
      "## Участие в акселераторах:",
      "Команда OVERLAGO успешно представила проект “Мой дом” на нескольких акселераторах, включая:",
      "- Акселератор Цифра",
      "- Акселератор Техлидеры 5.0",

      "## Отзывы и обратная связь:",
      "- Положительные отзывы от экспертов: Эксперты акселераторов высоко оценили функциональность и потенциал приложения, что дало команде уверенность в дальнейшем развитии проекта.",
      "- Предложения по улучшению: На основе обратной связи команда смогла внести улучшения в продукт, сделав его более удобным и полезным для пользователей.",
      "Эти достижения подтверждают, что проект “Мой дом” имеет большой потенциал и может стать успешным решением для улучшения коммуникации между управляющими компаниями и жильцами многоквартирных домов.",
    ],
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
      img8_MyH,
      img9_MyH,
      img10_MyH,
    ],
    url_sources: ["https://github.com/HubOl01/AppMyHome"],
    creator: "Создано вместе с командой OVERLAGO на акселераторе",
    fullStack: [FullStack.Flutter, FullStack.Dart, FullStack.Firebase],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 4,
    title: "City Adventures",
    category: category[0],
    url_icon: icon_CA,
    url_background: bg_CA,
    shortDescription:
      "Мобильное приложение, которое поможет открыть новые места в городе, узнать интересные факты из истории и увлекательно провести время с близкими. ",
    description: [
      "City Adventures - это захватывающее мобильное приложение, которое превращает вашу прогулку по городу в увлекательное приключение! Исследуйте свой город совершенно по-новому, обнаруживая его забытые и малоизвестные жемчужины.",
      "Особенности:",
      "- Интерактивная карта: Приложение предоставляет вам доступ к интерактивной карте вашего города, на которой отмечены достопримечательности и скрытые сокровища.",
      "- Получайте достижения и опыт: Посещая места и достопримечательности, вы зарабатываете достижения и опыт, что делает каждую поездку еще увлекательнее.",
      "- Исторические факты: Узнайте увлекательные исторические факты о каждой достопримечательности благодаря нашей информативной базе данных.",
      "- Соревнования с друзьями: Соревнуйтесь с друзьями и семьей, чтобы узнать, кто может найти больше мест и заработать больше достижений.",
      "## Почему City Adventures?",
      "City Adventures поможет вам:",
      "- Новым способом взглянуть на свой город.",
      "- Провести время с семьей и друзьями с увлекательными маршрутами.",
      "- Насладиться обучающими историческими фактами.",
      "- Повысить уровень активности и исследовательских навыков.",
      "Присоединяйтесь к нам в City Adventures и начните увлекательное путешествие по вашему городу уже сегодня!",
    ],
    url_images: [img1_CA, img2_CA, img3_CA, img4_CA],
    url_sources: ["https://github.com/HubOl01/CityAdventures"],
    creator: "Создано с командой на хакатоне",
    fullStack: [
      FullStack.Flutter,
      FullStack.Dart,
      FullStack.http,
      FullStack.NestJS,
      FullStack.Typescript,
      FullStack.PostgreSQL,
      FullStack.Prisma,
      FullStack.Swagger,
      FullStack.REST_API,
    ],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    id: 5,
    title: "LinguaQuest",
    category: category[0],
    url_icon: icon_LQ,
    url_background: bg_LQ,
    shortDescription:
      "Платформа для изучения языков в игровой форме позволяет более эффективно вовлекать пользователей в процесс обучения и поддерживать их интерес. Она даёт возможность учиться языку в удобное время, делиться своими успехами, новостями и событиями, а также общаться с другими пользователями или даже с ИИ.",
    description: [
      "LinguaQuest — это инновационное приложение для изучения английского языка, которое предлагает комплексный подход к освоению иностранной лексики и грамматики. Оно объединяет в себе функции справочника, словаря, чата и социальной сети, что делает процесс обучения увлекательным и эффективным.",

      "## Основные функции:",

      "Справочник и материалы по грамматике:",
      "- LinguaQuest предоставляет доступ к широкому спектру материалов по грамматике английского языка.",
      "- Пользователи могут изучать правила и примеры использования грамматических конструкций.",

      "Словарь пользователя:",
      "- Приложение позволяет создавать и управлять собственным словарным запасом.",
      "- Можно добавлять новые слова и фразы, а также повторять уже изученные.",

      "Чат с нейросетью и обратная связь:",
      "- В LinguaQuest есть функция чата с нейросетью, которая может помочь в изучении языка.",
      "- Нейросеть может предоставить обратную связь по написанным текстам и помочь улучшить свои навыки.",

      "Чат с пользователями и обратная связь:",
      "- Пользователи могут общаться друг с другом в чате и получать обратную связь по своим текстам.",
      "- Это помогает улучшить понимание языка и научиться использовать его в реальных ситуациях.",

      "Элемент социальных сетей:",
      "- Приложение работает как социальная сеть, где пользователи могут публиковать свои посты и комментировать чужие.",
      "- Это помогает поддерживать мотивацию и интерес к изучению языка.",

      "Элемент соревнования:",
      "- Рейтинги и рекорды викторины стимулируют пользователей соревноваться друг с другом.",
      "- Это мотивирует их продолжать изучение языка и улучшать свои навыки.",

      "LinguaQuest — это удобное и эффективное приложение для изучения английского языка. Оно объединяет в себе функции справочника, словаря, чата и социальных сетей, что делает процесс обучения увлекательным и результативным.",
    ],
    url_images: [
      img1_LQ,
      img2_LQ,
      img3_LQ,
      img4_LQ,
      img5_LQ,
      img6_LQ,
      img7_LQ,
      img8_LQ,
      img9_LQ,
    ],
    video: video_LQ,
    url_sources: ["https://github.com/HubOl01/LinguaQuest"],
    creator:
      "Создано с командой Procrastination Inc на акселераторе Техлидеры 5.0",
    fullStack: [
      FullStack.Flutter,
      FullStack.Dart,
      FullStack.http,
      FullStack.NestJS,
      FullStack.Typescript,
      FullStack.PostgreSQL,
      FullStack.Prisma,
      FullStack.Swagger,
      FullStack.REST_API,
    ],
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
    id: 6,
    title: "WeatherKotlin",
    category: category[0],
    shortDescription:
      "Прогноз прогоды - проект для изучения kotlin, Jetpack Compose",
    description: [
      "Прогноз прогоды - проект для изучения kotlin, Jetpack Compose",
    ],
    url_icon: "",
    url_background: bg_Weather,
    url_images: [img1_Weather, img2_Weather],
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
    id: 7,
    title: "My CV",
    category: category[1],
    shortDescription:
      "Мой личный вебсайт представляет собой платформу для демонстрации моих проектов, информации обо мне и других интересных материалов.",
    description: [
      "Мой личный вебсайт представляет собой платформу для демонстрации моих проектов, информации обо мне и других интересных материалов. Он создан с целью предоставить пользователям возможность узнать больше о моей работе, проектах и идеях, а также поделиться своими мыслями и впечатлениями.",

      "Основные разделы вебсайта",

      "О себе:",
      "- Краткая биография и основные этапы профессионального пути.",
      "- Образование и курсы, которые я прошел.",
      "- Личные интересы и хобби.",

      "Портфолио:",
      "- Описание моих текущих и завершенных проектов.",
      "- Примеры работ с детальным описанием и ссылками на источники.",

      "Новости и обновления:",
      "- Информация о новых проектах, достижениях и мероприятиях.",
      "- Анонсы предстоящих событий и вебинаров.",

      "Контакты:",
      "- Форма обратной связи для связи со мной.",
      "- Мои социальные сети и другие каналы коммуникации.",

      "Вебсайт разработан с помощью фреймворка ReactJS с Tailwind CSS на языке JavaScript. Он оптимизирован для мобильных устройств.",
    ],
    url_icon: "",
    url_background: bg_MyCV,
    url_images: [bg_MyCV],
    url_stores: ["/"],
    url_sources: ["https://github.com/HubOl01/my_cv"],
    creator: nickname,
    fullStack: [
      FullStack.React,
      FullStack.Javascript,
      FullStack.Vite,
      FullStack.CSS,
    ],
    platforms: [Platforms.Web],
    color: "",
  },
];

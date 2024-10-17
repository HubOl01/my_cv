import { FiMail } from "react-icons/fi";
import { FaVk, FaTelegramPlane } from "react-icons/fa";
const contacts = [
  //   {
  //     id: 1,
  //     name: "Your Address, Your City, Your Country",
  //     icon: <FiMapPin />,
  //   },
  {
    id: 1,
    name: "ru-developer@mail.ru",
    url: "mailto:ru-developer@mail.ru",
    icon: <FiMail />,
  },
  {
    id: 2,
    name: "@oleg01f",
    url: "https://vk.com/oleg01f",
    icon: <FaVk />,
  },
  {
    id: 3,
    name: "@foward01",
    url: "https://t.me/foward01",
    icon: <FaTelegramPlane />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Контактная информация
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <a href={contact.url} target="_blank">
              <li className="flex " key={contact.id}>
                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                  {contact.icon}
                </i>
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;

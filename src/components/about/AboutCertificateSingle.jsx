import { useState } from "react";
import ModalComponent from "../modalImage"; // Импортируем модальное окно

const AboutCertificateSingle = ({ title, image }) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия модального окна
  const [photoCurrent, setPhotoCurrent] = useState({
    src: "",
    alt: "",
    description: null,
    linkSource: null,
  });

  const handleOpenModal = () => {
    setPhotoCurrent({
      src: image,
      alt: title,
      description: null, // Если есть описание, можно передать его сюда
      linkSource: null, // Если есть ссылка на источник, можно передать ее сюда
    });
    setIsOpen(true); // Открываем модальное окно
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Закрываем модальное окно
  };

  return (
    <>
      <a href={image}>
        <img
          loading="lazy"
          src={image}
          className="w-64 py-0 px-0 bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
          alt={title}
        />
      </a>
    </>
  );
};

export default AboutCertificateSingle;

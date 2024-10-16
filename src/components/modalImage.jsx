import { Fragment } from "react";
import { Link } from "react-router-dom";

const ModalComponent = ({ open, handleClose, photoCurrent }) => {
  if (!open) return null; // Если модальное окно не открыто, не рендерим ничего

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose} // Закрытие модального окна при клике на фон
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-4 relative overflow-hidden" // Добавление стилей к содержимому
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на содержимое
      >
        <img
          src={photoCurrent.src}
          alt={photoCurrent.alt}
          className="max-w-full max-h-[80vh] rounded-lg" // Установка максимальной ширины и высоты
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ModalComponent;

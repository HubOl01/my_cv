import { Fragment } from "react";
import { Link } from "react-router-dom";

const ModalComponent = ({ open, handleClose, photoCurrent }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-4 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photoCurrent.src}
          alt={photoCurrent.alt}
          className="max-w-full max-h-[80vh] rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ModalComponent;

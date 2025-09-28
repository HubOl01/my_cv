// import React, { useRef, useEffect } from "react";

// const style = {
//   width: "100%",
//   overflow: "hidden",
//   cursor: "pointer",
// };

// export const Horizontable = ({ children }) => {
//   const ref = useRef(null);

//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   const onMouseDown = (event) => {
//     isDown = true;
//     startX = event.pageX - ref.current.offsetLeft;

//     scrollLeft = ref.current.scrollLeft;
//   };

//   const onTouchDown = (event) => {
//     startX = event.targetTouches[0].pageX - ref.current.offsetLeft;

//     scrollLeft = ref.current.scrollLeft;
//   };

//   const onDown = () => (isDown = false);

//   const onTouchMove = (event) => {
//     const x = event.targetTouches[0].pageX - ref.current.offsetLeft;
//     const walk = (x - startX) * 1;

//     scrollingLeft(scrollLeft - walk);
//   };

//   const onMouseMove = (event) => {
//     if (!isDown) {
//       return;
//     }

//     event.preventDefault();
//     const x = event.pageX - ref.current.offsetLeft;
//     const walk = (x - startX) * 1;

//     scrollingLeft(scrollLeft - walk);
//   };
//   // eslint-disable-next-line
//   /* eslint-disable */
//   const onWheel = (event) => {
//     event.preventDefault();

//     scrollingLeft(ref.current.scrollLeft + event.deltaY);
//   };

//   const scrollingLeft = (left) => (ref.current.scrollLeft = left);

//   useEffect(() => {
//     ref.current.addEventListener("wheel", onWheel, { passive: false });
//   }, []);

//   return (
//     <div
//       style={style}
//       ref={ref}
//       onTouchStart={onTouchDown}
//       onTouchMove={onTouchMove}
//       onMouseDown={onMouseDown}
//       onMouseMove={onMouseMove}
//       onMouseUp={onDown}
//       onMouseLeave={onDown}
//     >
//       {children}
//     </div>
//   );
// };

// export default Horizontable;

import React, { useRef, useEffect } from "react";

const style = {
  width: "100%",
  overflowX: "auto", // важно: должен быть scrollable
  overflowY: "hidden",
  cursor: "pointer",
  whiteSpace: "nowrap", // если children — inline элементы
  scrollbarWidth: "none" /* Для Firefox */,
  msOverflowStyle: "none" /* Для старого Edge/IE */,
};

export const Horizontable = ({ children }) => {
  const ref = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const isAtStart = () => ref.current.scrollLeft <= 0;
  const isAtEnd = () => {
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    return scrollLeft + clientWidth >= scrollWidth - 1; // -1 для погрешности
  };

  const onMouseDown = (event) => {
    isDown = true;
    startX = event.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const onTouchStart = (event) => {
    isDown = true;
    startX = event.touches[0].pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const onUp = () => {
    isDown = false;
  };

  const onMouseMove = (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - ref.current.offsetLeft;
    const walk = x - startX;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchMove = (event) => {
    if (!isDown) return;
    const x = event.touches[0].pageX - ref.current.offsetLeft;
    const walk = x - startX;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const onWheel = (event) => {
    const { deltaY } = event;

    // Горизонтальная прокрутка: deltaY → scrollLeft
    const newScrollLeft = ref.current.scrollLeft + deltaY;

    const atStart = isAtStart();
    const atEnd = isAtEnd();

    // Если скроллим вправо (deltaY > 0) и уже в конце — разрешаем вертикальную прокрутку
    if (deltaY > 0 && atEnd) {
      // Не вызываем preventDefault → браузер сам прокрутит страницу вниз
      return;
    }

    // Если скроллим влево (deltaY < 0) и уже в начале — разрешаем вертикальную прокрутку вверх
    if (deltaY < 0 && atStart) {
      return;
    }

    // Иначе — делаем горизонтальный скролл и отменяем стандартное поведение
    event.preventDefault();
    ref.current.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    const current = ref.current;
    current.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      current.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      style={style}
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onUp}
    >
      {children}
    </div>
  );
};

import { useEffect, useState } from "react";

export default function useWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handlerWindowWidth() {
      // setTimeout - чтобы колбэк-функция слушателя не срабатывала слишком часто, 
      // например при изменении ширины экрана в отладчике
      setTimeout(() => setWindowWidth(window.innerWidth), 500);
    }
    window.addEventListener("resize", handlerWindowWidth);

    // Отписываемся от события для оптимизации памяти
    return () => {
      window.removeEventListener("resize", handlerWindowWidth);
    };
  }, []);

  return windowWidth;
}

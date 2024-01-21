import { useState, useEffect } from "react";
import useCount from "./useCount";

export default function useSlice(arr) {
  const { showCards, addCards } = useCount();
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [lastElement, setLastElement] = useState();
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(arr.slice(0, showCards));
    setLastElement(showCards + addCards);
  }, [arr, showCards]);

  useEffect(() => {
    arr.length > lastElement - addCards
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
  }, [arr, lastElement]);

  function handleClick() {
    setLastElement(lastElement + addCards);
    setArray(arr.slice(0, lastElement));
  }

  return [array, handleClick, isButtonActive] ;
}

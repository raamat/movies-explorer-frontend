import { useState, useEffect } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    console.log(element)
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  //console.log(array)

  return { array, setArray, push, filter, update, remove, clear };
}

/*
export default function useArray(initialValue = []) {
  const [value, setValue] = useState(initialValue);

  function push(element) {
    setValue((oldValue) => [...oldValue, element]);
  }

  function remove(index) {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  }

  function isEmpty() {
    return value.length === 0;
  }

  return { value, setValue, push, remove, isEmpty };
}



const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = element => {
    setValue(oldValue => [...oldValue, element]);
  };

  const remove = index => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  return { value, setValue, push, remove, isEmpty };
};

export default useArray;
*/

import { useEffect, useState } from "react";
import useWidth from "./useWidth";

export default function useCount() {
  const [count, setCount] = useState(12);

  const width = useWidth();

  useEffect(() => {
    if (width > 1050) {
      setCount(12);
    } else if ((width <= 1050) & (width > 700)) {
      setCount(8);
    } else if (width <= 700) {
      setCount(5);
    }
  }, [width]);

  return count;
}

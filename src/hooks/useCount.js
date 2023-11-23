import { useEffect, useState } from "react";
import useWidth from "./useWidth";

import {
  SCREEN_WIDTH_DESKTOP,
  SCREEN_WIDTH_MOBILE,
  CARDS_TABLE_DESKTOP,
  CARDS_TABLE_TABLET,
  CARDS_TABLE_MOBILE,
} from "../utils/constants";

export default function useCount() {
  const [count, setCount] = useState(CARDS_TABLE_DESKTOP);

  const width = useWidth();

  useEffect(() => {
    if (width > SCREEN_WIDTH_DESKTOP) {
      setCount(CARDS_TABLE_DESKTOP);
    } else if (
      (width <= SCREEN_WIDTH_DESKTOP) &
      (width > SCREEN_WIDTH_MOBILE)
    ) {
      setCount(CARDS_TABLE_TABLET);
    } else if (width <= SCREEN_WIDTH_MOBILE) {
      setCount(CARDS_TABLE_MOBILE);
    }
  }, [width]);

  return count;
}

import { useState } from "react";

export const useCounter = (initial = 0, min, max) => {
  const [count, setCount] = useState(initial);

  let increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  let decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  return { count, increment, decrement }

}
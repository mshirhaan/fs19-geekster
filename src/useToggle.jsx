import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    console.log("sending api");
    setValue(!value);
  };

  return {
    value: value,
    toggleValue: toggleValue,
  };
};

export default useToggle;

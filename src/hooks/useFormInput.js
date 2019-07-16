import { useState } from "react";

function useFormInput(initValue, type = "text") {
  const [value, setValue] = useState(initValue);

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function onValueChange(values) {
    setValue(values.value);
  }

  if (type === "numberFormat") {
    return {
      onValueChange,
      value
    };
  }

  return {
    value,
    onChange: handleChangeValue
  };
}

export default useFormInput;

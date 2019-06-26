import { useState } from 'react'

function useFormInput(initValue) {
  const [value, setValue] = useState(initValue)

  function handleChangeValue(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChangeValue
  }
}

export default useFormInput
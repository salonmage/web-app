import React from "react";
import emitter from '../common/emitter'

function useEvent(event, handleData) {

  React.useEffect(() => {
    const token = emitter.addListener(event, data => handleData(data))
    return () => token.remove()
  })

}

export default useEvent
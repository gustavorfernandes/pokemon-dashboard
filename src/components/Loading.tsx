import React from "react"
import ReactLoading from "react-loading"

function Loading({ type, color }: any) {
  return(
    <ReactLoading 
      type="cylon"
      color="#0284C7"
      height={50}
      width={50}
    />    
  )
}

export default Loading

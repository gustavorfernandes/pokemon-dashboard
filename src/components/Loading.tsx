import React from "react"
import ReactLoading from "react-loading"

function Loading({ type, color }: any) {
  return(
    <ReactLoading 
      type="cylon"
      color="#FFFFFF"
      height={40}
      width={40}
    />    
  )
}

export default Loading

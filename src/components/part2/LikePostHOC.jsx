import React, { useState } from 'react'
import WrapHOC from './WrapHOC';

function LikePostHOC(props){
  return(
    <div>
      <button onClick={props.handleIncreament}>Like Post{props.counter} </button>
    </div>
  )
}export default WrapHOC(LikePostHOC);

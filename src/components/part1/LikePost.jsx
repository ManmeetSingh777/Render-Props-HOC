import React, { useState } from 'react'

function LikePost(props){
  return(
    <div>
      <button onClick={props.handleLikePostCount}>Like Post :{props.LikePostCounter} </button>
    </div>
  )
}export default LikePost;

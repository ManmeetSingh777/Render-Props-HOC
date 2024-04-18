import WrapHOC from "./WrapHOC";

function LikeImageHOC(props){
  return(
    <div>
      <button onClick={props.handleIncreament}>Like Image{props.counter} </button>
    </div>
  )
}

export default WrapHOC(LikeImageHOC);


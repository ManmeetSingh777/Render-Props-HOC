import WrapperHoc from "./Wrapper";

function LikeImage(props){
  return(
    
    <div>
      <button onClick={props.handleLikeImageCount}>Like Image{props.LikeImageCounter} </button>
    </div>
  )
}export default LikeImage;


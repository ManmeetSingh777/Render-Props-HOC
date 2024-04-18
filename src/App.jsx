import './App.css';
import LikeImage from './components/part1/LikeImage';
import LikePost from './components/part1/LikePost';
import Wrapper from './components/part1/Wrapper';
import LikeImageHOC from './components/part2/LikeImageHOC';
import LikePostHOC from './components/part2/LikePostHOC';





function App() {


  return (
    <div>
      <h3>Some Blog</h3>
     <h1>Render</h1>
      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage LikeImageCounter={counter} handleLikeImageCount= {handleIncreament}/>
        }}/>

        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handleLikePostCount= {handleIncreament}/>
        }}/>

      </div>
      <h1>HOC</h1>
      <div className='buttons'>
        
        <LikeImageHOC/>
        <LikePostHOC/>
      </div>
    </div>
  );
}

export default App;

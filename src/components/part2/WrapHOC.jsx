import {useState} from "react"
const WrapHOC=(WrapperFunction)=>{
        function WrapHOC(){
            const [counter, setCounter]=useState(0);
            const handleIncreament=()=>{
                setCounter(counter+1)
            }
            return(<WrapperFunction handleIncreament={handleIncreament}  counter={counter}/>)
            }
            return WrapHOC
        }

export default WrapHOC



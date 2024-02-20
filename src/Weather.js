import { useState } from "react";
import Data from "./Temp";
function Weather(){
    const[temp,setTemp]=useState("")
    const[weather,setWeather]=useState({})
const change=(i)=>{
    setTemp(i.target.value)
}
const change1=async(e)=>{
    if(e.code==="Enter"){
        let x= await Data(temp)
        setWeather(x)
    }
    
}
    
    return(
        <div>
            <div class="card border-success mb-3" style={{maxwidth:"10rem"}}>
  <div class="card-header bg-grey border-success"> <input type="text"  value={temp}  onChange={change}  onKeyPress={change1} placeholder="Enter City"/>
           </div>
  <div class="card-body text-success">
  {weather.main &&
        <div >
            <div id="city">{weather.name}
            ,{weather.sys.country}</div>
            <div id="temp">{weather.main.temp}</div>
        </div>
        }
   </div>
  </div>
        </div>
        
    )
}
export default Weather;

import axios from "axios"

const APP_Id="b9f28c48644507b6cf7b97bdaae288de"
const URL="https://api.openweathermap.org/data/2.5/weather"

const Data=async(query)=>{
    let {data}=await axios.get(URL,{
        params:{
            q:query,
            appid:APP_Id,
            unit:"metric"
        }
    })
    return data;
}
export default Data;
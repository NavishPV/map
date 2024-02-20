import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import EmpData from "./EmpData";
import EmpForm from "./EmpForm";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import UpdateData from "./UpdateData";
import AddCart from "./Addcart";
function Rout(){
  return(
    <div>
<Router>
  <Routes>
    <Route path='/' element={<EmpData/>}/>
    <Route path='/form' element={<EmpForm/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/edit/:empid' element={<UpdateData/>}/>
    <Route path='/add' element={<AddCart/>}/>
    </Routes>
</Router>
    </div>
  )
}
export default Rout;

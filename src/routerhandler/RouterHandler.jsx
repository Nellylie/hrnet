import { Routes, Route } from "react-router";
import Home from "../ui/home/Home";
import Employes from "../ui/employes/Employes";


function RouterHandler(){

    return (<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employes/>}/>
    </Routes>
    </>
    )
}

export default RouterHandler;
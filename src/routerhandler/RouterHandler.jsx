import { Routes, Route } from "react-router";
import Home from "../ui/home/Home";
import Employes from "../ui/employes/Employes";

// RouterHandler Component
// This component sets up the routing for the application using React Router.
// It defines three routes: the home route ('/') and the employees route ('/employees') and a global route for all paths.

function RouterHandler(){

    return (<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employes/>}/>
        <Route path="/*" element={<Home/>}/>

    </Routes>
    </>
    )
}

export default RouterHandler;
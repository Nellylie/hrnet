import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

function Header() {
    const homeUrl = '/';
    const employeeList = '/employees';
    const navigate = useNavigate();
    const [switchUrl, setSwitchUrl] = useState(homeUrl);
    const location = useLocation();

    useEffect(() => {
        setSwitchUrl(location.pathname === homeUrl ? employeeList : homeUrl);
    }, [location]); 

    const toggleUrl = () => {
        navigate(switchUrl); 
    };


    return (
        <div className="header-content">
        <div className="header-logo"><Link to="/"><img src={logo} alt="hrnet logo"></img></Link></div>
            <h1>HRnet</h1>
            <button onClick={toggleUrl}>
                {switchUrl === homeUrl ?  'Create New Employee' : 'Go to Employees List'}
            </button>
        </div>
    )
}

export default Header;

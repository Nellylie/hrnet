import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import logo from "../../assets/logo.png";

function Header() {
    // URLs for navigation
    const homeUrl = '/';
    const employeeList = '/employees';
    const navigate = useNavigate();
    const location = useLocation();

    // State for current URL to switch to
    const [switchUrl, setSwitchUrl] = useState(homeUrl);

    // Update switchUrl based on the current page
    useEffect(() => {
        setSwitchUrl(location.pathname === homeUrl ? employeeList : homeUrl);
    }, [location]); 

    // Navigate to the opposite page
    const toggleUrl = () => {
        navigate(switchUrl); 
    };

    // Component rendering with navigation toggle button
    return (
        <div className="header-content">
            {location.pathname === "/"&&(<div className="header-logo">
               <img src={logo} alt="hrnet logo" />
            </div>)}
            <h1>HRnet</h1>
            <button onClick={toggleUrl}>
                {switchUrl === homeUrl ? 'Create New Employee' : 'Go to Employees List'}
            </button>
        </div>
    );
}

export default Header;

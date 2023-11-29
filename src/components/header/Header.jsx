import { useState } from "react";
import { useNavigate } from "react-router";
function Header() {
    const homeUrl = '/';
    const employeeList = '/employees';
    const [switchUrl, setSwitchUrl] = useState(homeUrl);
    const navigate = useNavigate();
    const toggleUrl = () => {
        const newUrl = switchUrl === homeUrl ? employeeList : homeUrl;
        setSwitchUrl(newUrl);
        navigate(newUrl);    }

    return (
        <>
            <h1>HRnet</h1>
            <button onClick={toggleUrl}>
                {switchUrl === homeUrl ? 'Go to Employees List' : 'Create New Employee'}
            </button>
        </>
    )
}

export default Header;

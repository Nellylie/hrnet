import { submitForm } from "../../reduxsection/actionForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Home(){
    const dispatch= useDispatch();
    const formSubmit = useSelector((state)=>state.form);

    useEffect(()=>{
        console.log(formSubmit)

    },[formSubmit]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target["first-name"].value,
            lastName: e.target["last-name"].value,
            dateOfBirth : e.target["date-of-birth"].value,
            dateStart: e.target["date-start"].value,
            address: {
            street: e.target["street"].value,
            city: e.target["city"].value,
            state:  e.target["state"].value,
            zipCode: e.target["zip-code"].value
            },
            department: e.target["department"].value
        };
        dispatch(submitForm(formData));
        };
    return (
        <form className="formulaire" action="#" id="create-employee" onSubmit={handleSubmit}>
                
        <div className="section">
        <h2>Identity</h2>

        <label className="label" htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label className="label" htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label className="label" htmlFor="date-of-birth"/>
        <input type="date" id = "date-of-birth"/>
 
        <label className="label" htmlFor="date-start"/>
        <input type="date" id = "date-start"/>        </div>

        <div className="section">
            <h2>Address</h2>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label className="label" htmlFor="state">State</label>
            <select id="state">
                <option value="Alabama">Alabama
                </option>
                <option value="Alaska">Alaska</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Arizona">Arizona</option>
            </select>
            <label className="label" htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </div>

        <div className="section">
            <label className="label" htmlFor="department">Department</label>
            <select id="department">
                <option value="marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="development">Human Resources</option>
                <option value="legal">Legal</option>
            </select>



        </div>
        <button type="submit">Save</button>
    </form>
    )
}


export default Home;
import { submitForm } from "../../reduxsection/actionForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalUtils from "../../modules/modale/Modale";

function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const formSubmit = useSelector((state) => state.form);

    useEffect(() => {
        console.log(formSubmit);
    }, [formSubmit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);

        const formData = {
            firstName: e.target["first-name"].value,
            lastName: e.target["last-name"].value,
            dateOfBirth: e.target["date-of-birth"].value,
            dateStart: e.target["date-start"].value,
            // address: {
            //     street: e.target["street"].value,
            //     city: e.target["city"].value,
            //     state: e.target["state"].value,
            //     zipCode: e.target["zip-code"].value
            // },
            department: e.target["department"].value
        };
        dispatch(submitForm(formData));
    };

    return (
        <><h2>Create Employee</h2>

            <form className="formulaire" id="create-employee" onSubmit={handleSubmit}>
                <div className="section-identity">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input type="date" id="date-of-birth" />
                    <label htmlFor="date-start">Start Date</label>
                    <input type="date" id="date-start" />
                </div>

                <div className="section-adress">
                    <h3>Address</h3>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />
                    <label htmlFor="state">State</label>
                    <select id="state">
                    <option value="paris">Paris</option>
                    <option value="marseille">marseille</option>
                    </select>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </div>

                <div className="section">
                    <label htmlFor="department">Department</label>
                    <select id="department">
                        <option value="marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="development">Human Resources</option>
                        <option value="legal">Legal</option>                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
            <ModalUtils
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                formData={formSubmit}
            />
        </>
    )
}

export default Home;

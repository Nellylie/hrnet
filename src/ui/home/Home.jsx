import { submitForm } from "../../reduxsection/actionForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalUtils from "../../modules/modale/Modale";
import DarkLightDropdown from 'dark-light-dropdown';
import 'dark-light-dropdown/dist/index.es.css';
import { departmentDatas } from "../../modules/dropdown/departmentDatas";
import { statesDatas } from "../../modules/dropdown/statesDatas";

function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const formSubmit = useSelector((state) => state.form);


    const [selectedValueDepartment, setSelectedValueDepartment] = useState('');
    const [selectedValueStates, setSelectedValueStates ] = useState('');

    const handleOnChangeDepartment = (event) => {
        setSelectedValueDepartment(event.target.value);
    };


    const handleOnChangeStates = (event) => {
        setSelectedValueStates(event.target.value);
    };

    useEffect(() => {
        console.log(formSubmit);
    }, [formSubmit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);

        const formData = {
            firstName: e.target["first-name"].value,
            lastName: e.target["last-name"].value,
            dateStart: e.target["date-start"].value,
            department: selectedValueDepartment,
            dateOfBirth: e.target["date-of-birth"].value,
            street: e.target["street"].value,
            city: e.target["city"].value,
            state: selectedValueStates,
            zipCode: e.target["zip-code"].value,
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

                    <DarkLightDropdown label="State"
                        name="state"
                        id="state"
                        options={statesDatas}
                        onChange={handleOnChangeStates}
                        theme="light" />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </div>

                <div className="section-department">
                    <DarkLightDropdown label="Department"
                        name="department"
                        id="department"
                        options={departmentDatas}
                        onChange={handleOnChangeDepartment}
                        theme="dark" />
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

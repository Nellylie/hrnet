import { submitForm } from "../../reduxsection/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalUtils from "../../modules/modale/Modale";
import DarkLightDropdown from 'dark-light-dropdown';
import 'dark-light-dropdown/dist/index.es.css';
import { departmentDatas } from "../../modules/dropdown/departmentDatas";
import { statesDatas } from "../../modules/dropdown/statesDatas";
import { formatDate } from "../../utils/utils";
import DateSelect from "../../modules/selectdate/SelectDate";

function Home() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [dateStart, setDateStart] = useState(new Date());

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const formSubmit = useSelector((state) => state.form.formData);


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
            dateStart: formatDate(dateStart),
            department: selectedValueDepartment,
            dateOfBirth: formatDate(dateOfBirth),
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
                    <DateSelect selectedDate={dateOfBirth} onChange={setDateOfBirth} dateFormat="MM/dd/yyyy" />
                    <label htmlFor="date-start">Start Date</label>
                    <DateSelect selectedDate={dateStart} onChange={setDateStart} dateFormat="MM/dd/yyyy"/>
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

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
    // State initialization for form fields and modal
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    // Redux hooks for dispatching actions and accessing state
    const dispatch = useDispatch();
    const formSubmit = useSelector((state) => state.form.formData);

    // State for dropdown selections and form error messages
    const [selectedValueDepartment, setSelectedValueDepartment] = useState('');
    const [selectedValueStates, setSelectedValueStates ] = useState('');
    const [error, setError] = useState('');

    // Event handlers for dropdowns and form validation
    const handleOnChangeDepartment = (event) => setSelectedValueDepartment(event.target.value);
    const handleOnChangeStates = (event) => setSelectedValueStates(event.target.value);
    useEffect(() => [formSubmit]);

    const isEmpty = (value) => value.trim() === "";
    const containsInvalidChars = (value) => /[^a-zA-Z0-9 ]/.test(value);

    // validateForm: Validates form inputs for emptiness and invalid characters.
    // Iterates through specified fields, setting an error message if a field is invalid.
    // Returns true if all fields are valid, false otherwise.
    const validateForm = (e) => {
        const fieldsToValidate = [
            { value: e.target["first-name"].value, fieldName: "First Name" },
            { value: e.target["last-name"].value, fieldName: "Last Name" },
            { value: e.target["street"].value, fieldName: "Street" },
            { value: e.target["city"].value, fieldName: "City" },
            { value: e.target["zip-code"].value, fieldName: "Zip Code" }
        ];

        for (let { value, fieldName } of fieldsToValidate) {
            if (isEmpty(value)) {
                setError(`${fieldName} is required.`);
                return false;
            }
            if (containsInvalidChars(value)) {
                setError(`${fieldName} contains invalid characters.`);
                return false;
            }
        }
        return true;
    };

// handleSubmit: Handles the form submission.
// It prevents the default form submission behavior, validates the form, 
// and if valid, dispatches the submitForm action with the formatted form data.
// After submission, it opens a modal to confirm the action.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(e)) return;
        setError('');
        const formData = {
            firstName: e.target["first-name"].value,
            lastName: e.target["last-name"].value,
            startDate: formatDate(startDate),
            department: selectedValueDepartment,
            dateOfBirth: formatDate(dateOfBirth),
            street: e.target["street"].value,
            city: e.target["city"].value,
            state: selectedValueStates,
            zipCode: e.target["zip-code"].value,
        };
        dispatch(submitForm(formData));
        setModalIsOpen(true);
    };

    // Component rendering form and modal
    return (
        <><h2>Create Employee</h2>
            <form className="formulaire" id="create-employee" onSubmit={handleSubmit}>
                <div className="section-identity">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DateSelect label="date-of-birth" selectedDate={dateOfBirth} onChange={setDateOfBirth} dateFormat="MM/dd/yyyy" />
                    <label htmlFor="date-start">Start Date</label>
                    <DateSelect label="date-start" selectedDate={startDate} onChange={setStartDate} dateFormat="MM/dd/yyyy"/>
                </div>

                <div className="section-adress">
                    <h3>Address</h3>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <DarkLightDropdown label="state"
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
                {error && <div className="error">{error}</div>}
                <button className="form-save-button" type="submit">Save</button>
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

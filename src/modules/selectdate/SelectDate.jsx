import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelect({ label, selectedDate, onChange }) {
    return (
        // DatePicker component for selecting dates
        <DatePicker
            id={label}          // Set the ID for the component, useful for labels and form handling
            selected={selectedDate} // The currently selected date
            onChange={onChange}     // Function to call when a new date is selected
        />
    );
}

export default DateSelect;

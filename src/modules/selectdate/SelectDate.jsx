import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelect({ label, selectedDate, onChange }) {
    return (
      <DatePicker id={label} selected={selectedDate} onChange={onChange} />
    );
}

export default DateSelect;

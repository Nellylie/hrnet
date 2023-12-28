import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelect({ selectedDate, onChange }) {
    return (
      <DatePicker selected={selectedDate} onChange={onChange} />
    );
}

export default DateSelect;

import { Field } from 'formik';
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = ({label, name }) => {
 
    return (
      <div>
        <label
          htmlFor={name}
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          {label}
        </label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DatePicker
                placeholder="Pick a Date"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                id={name}
                {...field}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field>
      </div>
    );
}

export default DatePickerComp;

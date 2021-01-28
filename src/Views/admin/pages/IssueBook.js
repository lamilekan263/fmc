import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePickerComp from "./DatePickerComp";

const IssueBook = () => {
  const initialValues = {
    bookTitle: '',
    userId: '',
    startDate: new Date(),
    endDate: null
    
  };
  const onSubmit = (values, { resetForm }) => {
    console.log("Values", values)
    resetForm()
  };
  const validationSchema = Yup.object({
    bookTitle: Yup.string().required("Sorry enter Book title!"),
    userId: Yup.string().required("Enter User ID!"),
    startDate: Yup.date().required("Please Enter the Issued Date"),
    endDate: Yup.date().required('Please Enter when You want to return the book')
  });
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 className="text-xl font-semibold">Issue Book</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mt-6" autoComplete="off">
            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Book Title
            </label>
            <Field
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Enter Book Title"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="bookTitle" />

            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              User ID
            </label>
            <Field
              id="userId"
              type="text"
              name="userId"
              placeholder="Enter Quantity of Book"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="userId" />
            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Name
            </label>
            <Field
              id="name"
              disabled
              type="text"
              name="name"
              placeholder="Person Name"
              className="block w-full p-3 mt-2 cursor-not-allowed text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="description" />

            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <DatePickerComp label="Date Issued" name="startDate" />
                <ErrorMessage name="endDate" />
              </span>
              <span className="w-1/2">
                <DatePickerComp label="By when to return" name="endDate" />
                <ErrorMessage name="endDate" />
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-700 shadow-lg focus:outline-none hover:bg-green-900 hover:shadow-none"
            >
              Issue Book
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default IssueBook
;

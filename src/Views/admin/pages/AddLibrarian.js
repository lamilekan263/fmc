import React from "react";
import { connect } from 'react-redux'
// import axios from 'axios'

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddLibrarian = ({ auth }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber : '',
    address: '',
    _id : auth.user._id
  };
  const onSubmit = async(values) => {
    // const response = await axios.post("https://fmc-library.softcoder404.vercel.app/api/auth/login", values, {
    //   'headers': {
    //     'Authorization': 'Bearer ' + "jwtStr"
    //   }
    // }
    alert('A Librarian has been added successfully')
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name cant't be empty"),
    lastName: Yup.string().required("Last name can't be empty"),
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    phoneNumber : Yup.string().required('Sorry your phone number is requirred'),
    address : Yup.string().required('Sorry your address is required')
    
  });
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 className="text-xl font-semibold">
          <span className="font-normal">Add A Librarian</span>
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mt-6" autoComplete="off">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Firstname
                </label>
                <Field
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  autoComplete="given-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="firstName" />
              </span>
              <span className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Lastname
                </label>
                <Field
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  autoComplete="family-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="lastName" />
              </span>
            </div>
            <label
              htmlFor="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autoComplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="email" />
            <label
              htmlFor="phoneNumber"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Phone Number
            </label>
            <Field
              id="phoneNumber"
              type="phoneNumber"
              name="phoneNumber"
              placeholder="phone Number"
             
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="phoneNumber" />
            <label
              htmlFor="address"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
             Address
            </label>
            <Field
              id="address"
              type="text"
              name="address"
              placeholder="Enter your address"
              
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="address" />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-700 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Register
            </button>
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return{
    auth : state.auth
  }
}
export default connect(mapStateToProps)(AddLibrarian);

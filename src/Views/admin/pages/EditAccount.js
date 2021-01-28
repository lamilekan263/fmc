import React from "react";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import ImageAvatar from '../../../assets/img/avatar.png'

const EditAccount = () => {
  const initialValues = {
    firstName : '',
      lastName: '',
      emailAddress: '',
    phoneNumber: '',
    address : '',
    img : ''
  };
    const onSubmit = (values, { resetForm }) => {console.log("Values", values)
        resetForm();}
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name can't be empty!"),
    lastName: Yup.string().required("Last name can't be empty"),
    emailAddress: Yup.string().email().required("sorry Email can't be empty!"),
    phoneNumber : Yup.string(),
    address: Yup.string().required("Sorry address is required"),
   img : Yup.string()
  });
  return (
    <div className="content-wrapper">
      {" "}
      <div className="grid min-h-screen place-items-center">
        <h1 className="text-xl font-semibold text-center">
          Update Your Account
        </h1>
        <div className="w-11/12 p-6 bg-white sm:w-8/12 md:w-1/2 lg:w-7/12 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="mt-6 md:w-3/5" autoComplete="off">
              <div>
                <div>
                  <img src={ImageAvatar} alt="user avatar" className="w-2/5" />
                  <Field
                    id="img"
                    type="file"
                    name="img"
                    placeholder="Enter your first name"
                    className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner "
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between gap-3">
                    <span className="w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                      >
                        First Name
                      </label>
                      <Field
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner "
                        required
                      />
                      <ErrorMessage name="firstName" />
                    </span>
                    <span className="w-1/2">
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                      >
                        Last Name
                      </label>
                      <Field
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last Name"
                        className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner "
                        required
                      />
                      <ErrorMessage name="lastName" />
                    </span>
                  </div>
                  <label
                    htmlFor="emailAddress"
                    className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                  >
                    Email Address
                  </label>
                  <Field
                    id="emailAddress"
                    type="mail"
                    name="emailAddress"
                    placeholder="Enter your email address"
                    className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                  <ErrorMessage name="emailAddress" />

                  <label
                    htmlFor="phoneNumber"
                    className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                  >
                    Phone Number
                  </label>
                  <Field
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                    placeholder="Enter your Home address"
                    className="block w-full p-2 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                  <ErrorMessage name="address" />
                  <button
                    type="submit"
                    className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-700 shadow-lg focus:outline-none hover:bg-green-900 hover:shadow-none"
                  >
                    Save
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;

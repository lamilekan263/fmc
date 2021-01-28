import React from 'react'

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUser = () => {
     const initialValues = {
     firstName : "",
     lastName : "",
     email: "",
     password: "",
     passwordConfirm: ""
   };
   const onSubmit = (values) => alert("User added successfully");
   const validationSchema = Yup.object({
     firstName : Yup.string().required("First name cant't be empty"),
     lastName: Yup.string().required("Last name can't be empty"),
     email: Yup.string()
       .email("Looks like this is not an email")
       .required("Email cannot be empty"),
      password: Yup.string().required('Password is required'),
  passwordConfirm: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
    return (
      
        <div className="grid min-h-screen place-items-center">
          <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 className="text-xl font-semibold">
              Hello there 👋,{" "}
              <span className="font-normal">
                Add A New User
              </span>
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
                  htmlFor="password"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="********"
                  autoComplete="new-password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="password" />
                <label
                  htmlFor="password-confirm"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Confirm password
                </label>
                <Field
                  id="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  placeholder="********"
                  autoComplete="new-password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="passwordConfirm" />
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
}

export default AddUser

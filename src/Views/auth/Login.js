import React, { useState, useEffect  } from 'react'
import Spinner from "../../components/spinner/Spinner";
 import {
   ModalProvider,
   Modal,
   
   ModalTransition,
 } from "react-simple-hook-modal";
 import "react-simple-hook-modal/dist/styles.css";


import { connect } from "react-redux";
import { Link, useHistory } from 'react-router-dom'


import {  useFormik } from 'formik'
import * as Yup from 'yup'



import  bookShelfs  from '../../assets/img/lib.jpeg';
import { loginUser } from "../../Redux/actions/authActions";



const Login = ({ loginUser, auth}) => {
  const [isMyModalOpen, setisMyModalOpen] = useState(false)
  const history = useHistory();
  useEffect(() => {
     if (!auth.error) {
       if (auth.user.role === "Member") {
         history.push("/");
       } else if (auth.user.role === "Admin") {
         history.push("/admin");
       } else if (auth.user.role === "Librarian") {
         history.push("/admin");
       } else {
         return;
       }
     } else {
       alert(auth.error);
     }
  },[auth,history])





// initial values filed
  const initialValues = {
    email: '',
    password: ''
  };

  // form submission
//   const onSubmit = async values => {

//     loginUser(values);
//     openModal();
// }
const handleSubmit = async (value) => {
  await loginUser(value);
 

 
};



// form validadation using formik
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });
  
const formik = useFormik({
  initialValues,
  onSubmit: handleSubmit,
  validationSchema,
});
 
    return (
      <div>
        <ModalProvider>
          {auth.loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col items-center md:h-screen md:flex-row mb-5 md:mb-0">
              <div className="hidden w-full md:h-screen bg-black lg:block md:w-1/3 xl:w-2/3">
                <img
                  src={bookShelfs}
                  alt=""
                  className="object-cover overlay opacity-40 w-full h-full"
                />
              </div>
              <div className="flex items-center justify-center w-full md:h-screen px-6 bg-green-1300 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
                <div className="w-full h-100">
                  <Link
                    to="#"
                    className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0"
                  >
                    <div className=" md:block h-12 md:h-16 bg-green-700 text-white"></div>
                    <img
                      src="https://fmcabeokuta.net/wp-content/uploads/LOGO-150x150.jpg"
                      alt="logo"
                      className="hidden md:block h-12 md:h-16"
                    />
                  </Link>
                  <h1 className="my-5 md:mt-12 text-2xl font-semibold tracking-tighter text-green-700 sm:text-3xl title-font">
                    Log in to your account
                  </h1>

                  <form className="md:mt-6" onSubmit={formik.handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email "
                        className="w-full px-4 py-2 mt-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-green-500 focus:bg-white focus:ring-0 "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-900">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        className="w-full px-4 py-2 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-green-500 focus:bg-white focus:ring-0"
                        onChange={formik.handleChange}
                        required
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-900">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-2 text-right">
                      <Link
                        to="#"
                        className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-green-700 focus:text-green-700"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-green-700 hover:from-green-600 to-green-600 hover:to-green-700 focus:shadow-outline focus:outline-none"
                    >
                      {!auth.loading ? "Log in" : "loading"}
                    </button>
                  </form>

                  <hr className="w-full my-6 border-gray-300" />

                  <p className="mt-8 text-center">
                    Need an account?
                    <Link
                      to="/user/register"
                      className="font-semibold text-green-500 hover:text-green-700"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
              <Modal
                id="any-unique-identifier"
                isOpen={isMyModalOpen}
                transition={ModalTransition.BOTTOM_UP}
              >
                <div className="flex flex-col items-center justify-center mt-10">
                  <>
                      <h
                     className="my-5 text-center">

                      {auth.error && auth.error}
                    </h>
                    <button
                      onClick={() => {
                        setisMyModalOpen(!isMyModalOpen);
                      }}
                      className="bg-red-700 text-white py-2 px-4 shadow-lg rounded-lg"
                    >
                      close
                    </button>
                  </>
                </div>
              </Modal>
            </div>
          )}
        </ModalProvider>
      </div>
    );
}

const mapStateToProps = state=> {
  return{
    auth : state.auth
  }
}
export default connect(mapStateToProps, { loginUser })(Login);

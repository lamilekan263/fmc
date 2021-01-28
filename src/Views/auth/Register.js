import React  from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import Spinner from '../../components/spinner/Spinner'

import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { Formiz, useForm } from "@formiz/core";
import {
  isEmail,
  isPattern,
  isMinLength,
  
} from "@formiz/validations";
import { MyField } from "./MyField";

import { registerUser } from "../../Redux/actions/authActions";



import CheckSvg from "../../assets/img/checked.png";



const Register = ({ registerUser, auth }) => {
 
  const history = useHistory();
   const { isModalOpen,  openModal, closeModal } = useModal();

  const myForm = useForm();
  
  const handleSubmit = async (value) => {
    await registerUser(value);
    openModal()
  };
  return (
    <div>
      {/* start */}
      <ModalProvider>
        {auth.loading ? (
          <Spinner />
        ) : (
          <div className="grid min-h-screen place-items-center shadow-lg">
            <div className=" p-7 md:p-12 bg-white ">
              <Formiz connect={myForm} onValidSubmit={handleSubmit}>
                <form
                  noValidate // Disable native html validation
                  onSubmit={myForm.submit}
                >
                  <h1 className=" font-normal">
                    Hello there ,
                    <br />
                  </h1>
                  <h1 className="text-lg font-semibold leading-7">
                    please register below to Join us at FMCA Medical Library
                  </h1>
                  <div className="flex justify-between gap-3">
                    <span className="w-1/2">
                      <MyField
                        name="firstName"
                        label="First Name"
                        required="First Name is required"
                      />
                    </span>
                    <span className="w-1/2">
                      <MyField
                        name="lastName"
                        label="Last Name"
                        required="Last Name is required"
                      />
                    </span>
                  </div>
                  <MyField
                    name="email"
                    label="Email"
                    validations={[
                      {
                        rule: isEmail(),
                        message: "This is not a valid email",
                      },
                    ]}
                  />

                  <MyField
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    required="Enter  your phone number"
                  />
                  <MyField
                    name="address"
                    label="Address"
                    type="text"
                    required="Address is required"
                  />
                  <MyField
                    name="password"
                    label="Password"
                    type="password"
                    required="password is required"
                    validation={[
                      {
                        rule: isMinLength(6),
                        message: "Password should be minimum of 6",
                      },
                    ]}
                  />
                  <MyField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    required="password is required"
                    validations={[
                      {
                        rule: isPattern(myForm.flatValues.password),
                        message: "Sorry password doesn't match",
                      },
                    ]}
                  />
               
                    <button
                      type="submit"
                      disabled={!myForm.isValid}
                      className="bg-green-900 text-white px-7 py-2 rounded-lg mt-5"
                    >
                      Submit
                    </button>
                 
                </form>
              </Formiz>
            </div>

            <Modal
              id="any-unique-identifier"
              isOpen={isModalOpen}
              transition={ModalTransition.BOTTOM_UP}
            >
              <div className="flex flex-col items-center justify-center mt-10">
                {!auth.error ? (
                  <>
                    {" "}
                    <div>
                      <img src={CheckSvg} alt="success " />
                    </div>
                    <h1 className="my-5 text-center">Your Registration was successful. Please check your mail to activate your account </h1>
                    <button
                      onClick={() => {
                        closeModal()
                        history.push("/user/login");
                      }}
                      className="bg-red-700 text-white py-2 px-4 shadow-lg rounded-lg"
                    >
                      close
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <div>
                    
                    </div>
                    <h1 className="my-5 text-center">{ auth.error}</h1>
                    <button
                      onClick={() => {
                        closeModal()
                      }}
                      className="bg-red-700 text-white py-2 px-4 shadow-lg rounded-lg"
                    >
                      close
                    </button>
                  </>
                )}
              </div>
            </Modal>
          </div>
        )}
      </ModalProvider>
      {/* Fiinish */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  
  
});

export default connect(mapStateToProps, { registerUser })(Register);



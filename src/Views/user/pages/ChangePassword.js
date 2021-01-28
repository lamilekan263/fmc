import React from 'react'

const ChangePassword = () => {
    return (
      <div className="content-wrapper bg-white">
        <div className="pl-5 py-5">
          {" "}
          <h1>Change Password</h1>
          <p>Hints on getting your new password right:</p>
          <p>
            Your new password must be between 8 and 15 characters in length.
          </p>
        </div>

        <section className="text-gray-700 body-font">
          <div className="container px-8 pt-15  pb-24 mx-auto lg:px-4">
            <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              <div className="relative ">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2 mb-4 mr-4 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </div>
              <div className="relative ">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-2 mb-4 mr-4 text-base text-green-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                />
              </div>

              <button className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-green-700 hover:from-green-600 to-green-600 hover:to-green-700 focus:ring focus:outline-none">
                Change Password
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ChangePassword

import React from 'react'
import Globe from '../assets/img/globe.jpeg'
import Footer from '../components/footer/Footer'

const Contact = () => {
    return (
      <div >
      <section className="flex flex-col my-5 items-center h-screen md:flex-row ">
        <div className="container mx-auto">
          <div className="flex justify-center px-2 py-6 ">
            <div className="flex w-full rounded-lg border xl:w-4/4 lg:w-11/12">
              <div className="relative w-full h-auto bg-white bg-cover border border-r-0 rounded-l-lg lg:w-6/12">
                <div className="relative  mx-12 my-6 text-left">
                  <h2 className="mb-2 text-2xl font-semibold tracking-tight text-green-700 sm:text-3xl title-font">
                    CONTACT US TODAY
                  </h2>
                  <div className="w-full mt-8 text-base leading-relaxed text-gray-700 sm:md:w-3/3 lg:text-1xl ">
                    Sign up for our newsletter to receive updates and exclusive
                    offers
                  </div>
                  <div className="relative text-left ">
                    <form className="mt-6" action="#" method="POST">
                      <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                        <div className="w-full px-3 mb-6  md:mb-0">
                          <label
                            className="text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                            htmlFor="name"
                            minLength="6"
                          >
                            Your Name
                          </label>
                          <input
                            className="block w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                            id="name"
                            type="text"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="w-full px-3 ">
                          <label
                            className="text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="block w-full px-4 py-2 mt-2 mb-4 text-base bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                            id="email"
                            type="text"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="text-sm font-medium leading-relaxed tracking-tighter text-gray-700"
                            htmlFor="textarea"
                          >
                            Message
                          </label>
                          <textarea
                            className="block w-full px-4 py-2 mt-2 mb-4 text-base bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                            id="textarea"
                            row="10"
                            cols="50"
                            placeholder="Your message please..."
                          />
                        </div>
                      </div>
                      <button className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-green-700 hover:from-green-600 to-green-600 hover:to-green-700 focus:ring focus:outline-none">
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="hidden w-full g-gray-400 lg:block md:w-1/3 xl:w-2/3 bg-black">
                <img
                  src={ Globe }
                  alt=""
                  className="object-cover w-full h-full rounded-r-lg overlay opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
      </div>
    );
}

export default Contact

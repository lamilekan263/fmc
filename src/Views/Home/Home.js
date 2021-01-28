import React, { useEffect } from 'react'
import AOS from "aos";

import Testimonial from './Testimonial';
import Footer from '../../components/footer/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({duration : 3000})
  }, [])
    return (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
            <div
              data-aos="fade-right"
              className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:mr-20 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center"
            >
              <h2
                data-aos="fadeIn"
                className="mb-1 text-md font-medium tracking-widest text-green-500 title-font"
              >
                FMCA Medical Library
              </h2>
              <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-green-800 lg:text-left lg:text-5xl title-font">
                Welcome to Our Medical Library
              </h1>
              <p className="mb-3 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Get medical resources both Online and Offline
              </p>
              <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Browse from the largest collection of medical books. Read from
                anywhere, at anytime.
              </p>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img
                className="object-cover object-center rounded-lg "
                alt="hero"
                src="https://static.live.templately.com/2020/07/872fb83e-vactor.svg"
              />
            </div>
          </div>
        </section>
        {/* our process starts here */}
        <section className="mb-5">
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-green-700 text-5xl text-bold">Our Process</h1>
            <span className="h-1 w-20 block mt-4 bg-green-700"></span>
          </div>
          <div className=" container md:flex flex-col jusitfy-center items-center  text-center">
            <h1 className="text-gray-500 text-lg my-7 leading-7 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              accusamus labore repellat laudantium eum magnam ad eligendi,
              excepturi, cupiditate libero in tempore deserunt velit rerum
              doloremque aut nulla praesentium. Recusandae!
            </h1>
            <button className="bg-green-700 text-white py-3 px-5 rounded-lg mb-5">
              Compare Plans
            </button>
          </div>
        </section>
        {/* our process ends here */}
        {/* pricing section starts here */}

        <section className="bg-green-700 text-gray-700 body-font">
          <div className="container px-8 py-8 mx-auto lg:px-48">
            <div className="md:flex items-center justify-center ">
              <div className=" lg:px-10 lg:w-1/2 md:w-full shadow-lg">
                <div className="h-full px-4 py-6 border rounded-xl bg-white">
                  <h3 className="tracking-widest text-green-700">Free Plan</h3>
                  <h2 className="flex items-center justify-start mt-2 mb-4 text-3xl font-bold leading-none text-left text-green-700 lg:text-6xl">
                    ₦0
                    <span className="ml-1 text-base text-green-700">/mo</span>
                  </h2>
                  <p className="mb-4 text-base leading-relaxed text-green-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus earum, suscipit odio labore aliquid totam nostrum
                    maxime!
                  </p>
                  <p className="flex items-center mb-2 text-green-700">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-green-700 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Feature 1
                  </p>
                  <p className="flex items-center mb-2 text-green-700">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-green-700 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Feature 2
                  </p>
                  <button className="items-end w-full px-8 py-2 mt-12 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 border rounded-lg shadow-xl hover:text-white focus:shadow-outline focus:outline-none hover:bg-black hoveer:border-black">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className=" my-5 md:my-0 mx-auto lg:px-10 lg:w-1/2 md:w-full shadow-lg">
                <div className="h-full px-4 py-6 border rounded-xl shadow-lg">
                  <h3 className="tracking-widest text-white">PRO</h3>
                  <h2 className="flex items-center justify-start mt-2 mb-4 text-3xl font-bold leading-none text-left text-white lg:text-6xl">
                    ₦3800
                    <span className="ml-1 text-base text-white">/mo</span>
                  </h2>
                  <p className="mb-4 text-base leading-relaxed text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus earum, suscipit odio labore aliquid totam nostrum
                    maxime! .
                  </p>
                  <p className="flex items-center mb-2 text-white">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-green-700 bg-white rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Feature 1
                  </p>
                  <p className="flex items-center mb-2 text-white">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-green-700 bg-white rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Feature 2
                  </p>
                  <p className="flex items-center mb-6 text-white">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-green-700 bg-white rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Feature 3
                  </p>
                  <button className="w-full px-8 py-2 font-semibold textgreen-700 transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-white text-green-700 hover:bg-gray-200 hover:text-green-900 focus:shadow-outline focus:outline-none">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* pricing section ends here */}
        {/* Testimonial Section starts here*/}
        <section className="pt-36 body-font">
          <div className="flex flex-col text-center items-center justify-center">
            <h1
              data-aos="fade-up"
              className="text-green-700 text-md lg:text-2xl text-bold"
            >
              Testimonials
            </h1>
            <h1 className="text-green-700 text-lg lg:text-4xl text-bold">
              What people are saying about us
            </h1>
            <span className="h-1 w-20 block mt-4 bg-green-700"></span>
          </div>
          <Testimonial />
        </section>

        {/* Testimonial section ends here */}
        <Footer />
      </div>
    );
}

export default Home

import React from 'react'
import Footer from '../components/footer/Footer';


const Opac = () => {
    return (
      <div>
      <div className="container   justify-between flex-wrap p-5 mx-auto md:items-center flex-row text-center">
        <div className="md:flex  justify-center mt-10">
          <div className="h-80 bg-green-700 my-5 md:mr-5 hover:bg-green-500 cursor-pointer rounded-md w-full md:w-96 flex flex-col justify-center items-center">
            <svg
              className="w-64 h-16 fill-current text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <h1 className="text-white md:text-xl">
              Access our online resources here
            </h1>
          </div>
          <div className="h-80 bg-green-900 hover:bg-green-500 rounded-md w-full cursor-pointer md:w-96 flex flex-col justify-center items-center">
            <svg
              className="w-64 h-16 fill-current text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h1 className="text-white md:text-xl">
              Access our offline resources here
            </h1>
          </div>
        </div>
      </div>
        <Footer />
        </div>
    );
}

export default Opac

import React from 'react';
import SchoolPostImage  from "../assets/img/poststand.jpg";
import Footer from '../components/footer/Footer';

const AboutUs = () => {
    return (
      <div>
        <section>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 ">
            <div className="absolute top-0 w-full h-full bg-top bg-cover">
              <span
                id="blackOverlay"
                className="w-full h-full absolute   bg-gradient-to-r from-green-900 via-green-700 to-green-600"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <p className="my-6  text-white text-3xl font-bold md:text-5xl">
                      About Us
                    </p>
                    <p className="my-6  text-white text-md ">
                      FMCA Medical Library story
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
        </section>
        <section className="py-8 px-10 ">
          <h1 className="text-green-700 font-bolder text-xl leading-15">
            Historical Background
          </h1>
          <div className="md:flex flex-row justify-between">
            {" "}
            <p className="leading-7 lg:w-3/5 text-gray-600 py-5 lg:pl-5 lg:mr-3">
              The FMCA Medical Library commenced operation in September 1999
              after the existence of the hospital on 21st April 1993 with the
              appointment of a Professional Librarian. The Medical Library
              provides relevant biomedical, scientific & clinical/health
              information through books, journals, electronic databases and
              other reference resources. It also provides physical
              infrastructure for studying in support of academic, capacity
              building & research activities in the Centre. Its resources and
              services are routinely upgraded to meet the information needs of
              its users and also to enhance the goals & mission of the Centre.
              The staff consists of 7 Medical Librarians, 1 Senior Library
              Officer & 2 supporting staff.
            </p>
            <div className="lg:w-2/5">
              <img
                src={SchoolPostImage}
                className="w-full "
                alt="school post banner"
              />
            </div>
          </div>
        </section>
        <section className="py-40 px-2 bg-green-700 text-white mb-5">
          <div className="container md:flex flex-row justify-center  items-center rounded-lg ">
            <div className="flex flex-col items-center justify-center lg:mr-3 py-3 px-5 text-center shadow-2xl lg:w-1/3 mb-5 md:mb-0 md:h-65">
              <div className="py-2">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h1 className="text-bold text-lg">Vision</h1>
              <p className="py-2">
                The Medical Library believes that quality health Information is
                essential for improved health and so strives to enhance the
                provision & accessibility of quality health information for
                patient’s care, education and research throughout the hospital
                community.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-3 px-5 text-center shadow-2xl lg:w-1/3 h-64 rounded-lg">
              <div className="py-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h1 className="text-bold text-lg">Mission</h1>
              <p>
                Connecting people with knowledge, acquiring, preserving and
                providing innovative information services.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default AboutUs

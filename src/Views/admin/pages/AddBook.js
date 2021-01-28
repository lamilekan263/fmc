import React from "react";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddBook = () => {
  const initialValues = {
    isbn : '',
      authorName: '',
      bookTitle: '',
    publisher: '',
    category : '',
    bookImage : '',
      pdf: '',
    quantity : '',
    description : ''
  };
    const onSubmit = (values, { resetForm }) => {console.log("Book added successfully", )
        resetForm();}
  const validationSchema = Yup.object({
    isbn: Yup.string().required("Sorry the book ISBN is required!"),
    authorName: Yup.string().required("Last name can't be empty"),
    bookTitle: Yup.string().required("Sorry the book Title is required!"),
    publisher : Yup.string(),
    pdf: Yup.string().required("Last name can't be empty"),
    quantity: Yup.number().required("Enter even if the book quantiy is one (1)"),
    description: Yup.string()
  });
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-6 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12">
        <h1 className="text-xl font-semibold">Add Book</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mt-6" autoComplete="off">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  htmlFor="isbn"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Isbn
                </label>
                <Field
                  id="isbn"
                  type="text"
                  name="isbn"
                  placeholder="Enter ISBN and press Tab"
                  
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="isbn" />
              </span>
              <span className="w-1/2">
                <label
                  htmlFor="authorName"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Author Name
                </label>
                <Field
                  id="authorName"
                  type="text"
                  name="authorName"
                  placeholder="Enter Author Name"
                  
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="authorName" />
              </span>
            </div>
            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Book Title
            </label>
            <Field
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Enter Book Title"
             
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="bookTitle" />
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  htmlFor="category"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Category
                </label>
                <Field
                  id="category"
                  type="text"
                  name="category"
                  placeholder="Enter Category"
                  
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="category" />
              </span>
              <span className="w-1/2">
                <label
                  htmlFor="publisher"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Publisher
                </label>
                <Field
                  id="publisher"
                  type="text"
                  name="publisher"
                  placeholder="Enter Publisher Name"
                  
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="publisher" />
              </span>
            </div>
           
                <label
                  htmlFor="bookImage"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Upload Book Image
                </label>
                <Field
                  id="bookImage"
                  type="file"
                  name="bookImage"
                 
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="bookImage" />
             
                <label
                  htmlFor="pdf"
                  className="block text-xs font-semibold text-gray-600 uppercase mt-2"
                >
                  Upload PDF
                </label>
                <Field
                  id="pdf"
                  type="file"
                  name="pdf"
                  
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <ErrorMessage name="publisher" />
             
            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Quantity
            </label>
            <Field
              id="quantity"
              type="number"
              name="quantity"
              placeholder="Enter Quantity of Book"
              
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="quantity" />
            <label
              htmlFor="bookTitle"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Description
            </label>
            <Field
              id="description"
              as="textarea"
              name="description"
              placeholder="Enter Book description"
              autoComplete="description"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <ErrorMessage name="description" />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-700 shadow-lg focus:outline-none hover:bg-green-900 hover:shadow-none"
            >
              Add Book
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddBook;

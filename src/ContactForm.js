import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import './ContactForm.css';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      gender: '',
      country: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      contactNumber: Yup.string().required('Contact Number is required'),
      gender: Yup.string().required('Gender is required'),
      country: Yup.string().required('Country is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log('Submitted Data:', values);
      setIsModalOpen(true);
    },
  });

  return (
    <div>
      <div className="center-text">
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <table className="tclass">
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstName">First Name</label>
              </td>
              <td>
                <label htmlFor="lastName">Last Name</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your name here"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}
              </td>
              <td>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your name here"
                  {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error">{formik.errors.lastName}</div>
                ) : null}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <label htmlFor="contactNumber">Contact Number</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </td>
              <td>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your number here"
                  {...formik.getFieldProps('contactNumber')}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div className="error">{formik.errors.contactNumber}</div>
                ) : null}
              </td>
            </tr>

            <tr>
              <td>
                <label>Gender</label>
              </td>
              <td>
                <label htmlFor="country">Country</label>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="error">{formik.errors.gender}</div>
                ) : null}
              </td>
              <td>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country here"
                  {...formik.getFieldProps('country')}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="error">{formik.errors.country}</div>
                ) : null}
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <label htmlFor="message">Message</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about you"
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </td>
            </tr>
            <tr>
            <button type="submit">Submit</button>
            </tr>
          </tbody>
        </table>

        
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Thank You Modal"
      >
        <h2>Thank you, {formik.values.firstName}!</h2>
        <p>Your message has been received.</p>
      </Modal>
    </div>
  );
};

export default ContactForm;

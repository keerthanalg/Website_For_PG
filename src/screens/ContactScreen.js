import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import "./contact.css";
import { Formik } from "formik";
import * as Yup from "yup";

const ContactScreen = () => {
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    date: Yup.string().required("Move-In Date is required"),
  });
  return (
    <div className="contactUsWrapper">
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <h2>Reach Out</h2>
            <p>
              We’re excited to welcome you! Feel free to contact us anytime for
              room availability, pricing, or any questions you may have.
            </p>

            <h2>Our Address:</h2>
            <p>
              Happy Stay PG 2nd Cross, ABC Road, Koramangala Bengaluru,
              Karnataka – 560034
            </p>
            <p>📞 Call or WhatsApp: +91 98765 43210</p>
            <p> 📧 Email: hello@happystaypg.com</p>
            <p>🕘 Office Hours: 9:00 AM – 9:00 PM (Mon – Sat)</p>

            <h2>Follow Us:</h2>
            <p>Instagram: @HappyStayPG</p>
            <p>Facebook: facebook.com/happystaypg</p>
            <p>Google Reviews: ⭐⭐⭐⭐⭐ (4.8/5)</p>
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>Inquiry Form</h2>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                full_name: "",
                email: "",
                phone: "",
                date: "",
                message: "",
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values, "values");
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>Full Name</label>
                    <input
                      name="full_name"
                      value={values.full_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.full_name && errors.full_name && (
                      <div className="error">{errors.full_name}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Email Address</label>
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input 
                    name="address"
                    values={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                 {touched.address && errors.address && (
                  <div className="error">{errors.address}</div>
                 )}
                  </Form.Field>
                  <Form.Field>
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Preferred Move-In Date</label>
                    <input
                      name="date"
                      type="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.date && errors.date && (
                      <div className="error">{errors.date}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Message</label>
                    <input
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onafterprint
                      onBlur={handleBlur}
                    />
                  </Form.Field>
                  <Button type="submit">Submit Inquiry</Button>
                </Form>
              )}
            </Formik>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

};

export default ContactScreen;

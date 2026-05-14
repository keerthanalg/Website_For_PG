import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import { Bounce, ToastContainer } from "react-toastify";
// import buildingImg from "../assets/images/building_img.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";
import { getDatabase, ref, push } from "firebase/database";

const BookVisitScreen = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    date: Yup.string().required("Preffered date is required"),
  });  
  
  const db = getDatabase();
  const saveBooking =async (values) => {
  try {
    await push(ref(db, "visitbooking"),{
      name: values.name,
      email:values.email,
      phone:values.phone,
      date:values.date,
    });
    alert("Form Submitted");
    } catch (error){
      console.error("Error saving:", error);
      alert("Error Saving");
    }
  };

  return (
    <>  
      <Grid
        className="booking_screen_grid"
        centered
        textAlign="center"
        style={{
          boxShadow: "0em 0em 4em 1em #0000001c",
          margin: "8em auto",
          maxWidth: "1200px",  
        }}
      >
        <h1>Book Your Visit</h1>
        <Grid.Row>
          <Grid.Column className="leftContainerOfBooking" width={8}>
            {/* <img src={buildingImg} style={{ height: "25em" }} alt="building" /> */}
          </Grid.Column>
          <Grid.Column width={8} style={{ padding: "0em 0em 0em 3em" }}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ name: "", email: "", phone: "", date: "" }}
              // onSubmit={async (values, { resetForm }) => {
              //  try {
              //   const docRef=await addDoc(collection(db, "visitbooking"), {
              //     name: values.name,
              //     email: values.email,
              //     phone: values.phone,
              //     date: values.date
              //   });
              //   console.log("Form saved with ID:", docRef.id);
              //   alert("Form Submitted")
              //   resetForm();
              //   } catch (error){
              //     console.error("Error:", error);
              //     alert("Error Saving");
              //   }
              //   // toast("Booking Successful");
              //   // console.log(values, "values");
              // }}

            onSubmit={async (values, {resetForm}) => {
              await saveBooking(values);
              resetForm();
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
                    <label>Name</label>
                    <input
                      placeholder="Your Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && (
                      <div className="error">{errors.name}</div>
                    )} 
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      placeholder="Your Email"
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
                    <label>Phone</label>
                    <input
                      placeholder="Your Phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phone && touched.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </Form.Field>
                  <Form.Field>
                    <label>Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.date && errors.date && (
                      <div className="error">{errors.date}</div>
                    )}
                  </Form.Field>
                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Formik>
            <ToastContainer
              theme="dark"
              transition={Bounce}
              draggable
              position="top-right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default BookVisitScreen;


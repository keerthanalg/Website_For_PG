import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const forgotPasswordValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleForgotPassword = (values, { resetForm, setSubmitting }) => {
    fetch("http://localhost:3001/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("OTP sent:", data.otp);
        alert(`OTP sent to ${values.email}`);
        resetForm();
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending OTP");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="forgot-password-wrapper">
      <h2>Forgot Password</h2>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordValidation}
        onSubmit={handleForgotPassword}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field error={touched.email && !!errors.email}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div color="red" size="tiny">{errors.email}</div>
              )}
            </Form.Field>

            <Button type="submit" primary fluid disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send OTP"}
            </Button>
          </Form>
        )}
      </Formik>
      <p>Remember Password</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default ForgotPasswordScreen;

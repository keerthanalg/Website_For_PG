import React, { useState } from "react";
import "./LoginScreen.css";
import { Button, Form, Grid } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  let activeScreen = "login";

if (location.pathname === "/register") activeScreen = "register";
else if (location.pathname === "/forgot") activeScreen = "forgot";

  const loginValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerValidation = Yup.object().shape({
    userName: Yup.string().required("User name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const forgotPasswordValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });


  const ADMIN_EMAILS = ["admin1@gmail.com"];

  const handleLogin = async (values, { resetForm }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const userEmail = userCredential.user.email;
  
      toast.success("Login successful!");
  
      if (ADMIN_EMAILS.includes(userEmail)) {
        navigate("/admin");
      } else {
        navigate("/offers");
      }
  
    } catch (error) {
      toast.error(error.message);
    }
    resetForm();
  };
  
  const handleRegister = async (values, { resetForm }) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error.message);
    }
    resetForm();
  };

  const handleForgotPassword = async (email) => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };
  return (
    <div className="loginWrapper">
      <Grid>
        <Grid.Row>
          <Grid.Column className="left_banner" width={8}>
          </Grid.Column>

          <Grid.Column className="right_banner" id="loginContainer" width={8}>
            {activeScreen === "login" && (
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginValidation}
                onSubmit={handleLogin}
              >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                  <Form onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: "center", color: "black" }}>Login</h1>

                    <Form.Field>
                      <label>Email</label>
                      <input
                        value={values.email}
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Field>

                    <Form.Field style={{ position: "relative" }}>
                      <label>Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i
                        className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                      {touched.password && errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </Form.Field>

                    <div
                      style={{
                        textAlign: "right",
                        // margin: "1em",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() =>  navigate("/register")}
                      >
                        Don't have an account? Sign up
                      </span>

                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() =>  navigate("/forgot")}
                      >
                        Forgot Password?
                      </span>
                    </div>

                    <div className="buttonWrapper">
                      <Button type="submit">Login</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}

            {activeScreen === "register" && (
              <Formik
                initialValues={{ userName: "", email: "", password: "" }}
                validationSchema={registerValidation}
                onSubmit={handleRegister}
              >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                  <Form onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: "center", color: "black" }}>Register</h1>

                    <Form.Field>
                      <label>User Name</label>
                      <input
                        value={values.userName}
                        name="userName"
                        placeholder="Enter username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.userName && errors.userName && (
                        <div className="error">{errors.userName}</div>
                      )}
                    </Form.Field>

                    <Form.Field>
                      <label>Email</label>
                      <input
                        value={values.email}
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Field>

                    <Form.Field style={{ position: "relative" }}>
                      <label>Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i
                      className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                      {touched.password && errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </Form.Field>

                    <div
                      style={{
                        textAlign: "right",
                        margin: "1em",
                        color: "black",
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <span>Already have an account?</span>
                      <span
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </span>
                    </div>

                    <div className="buttonWrapper">
                      <Button type="submit">Register</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}

            {activeScreen === "forgot" && (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={forgotPasswordValidation}
                onSubmit={(values) => {
                  toast.info(`Password reset link sent to ${values.email}`);
                  handleForgotPassword(values.email);
                }}
              >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                  <Form onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: "center", color: "black" }}>Forgot Password</h1>

                    <Form.Field>
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
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Field>

                    <div className="buttonWrapper">
                      <Button type="submit">Send OTP</Button>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "2rem",
                        color: "black",
                        margin: "1rem 0rem",
                        justifyContent: "center",
                      }}
                    >
                      <span>Remember Password?</span>
                      <span
                        onClick={() => navigate("/login")}
                        style={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
                      >
                        Login
                      </span>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default LoginScreen;

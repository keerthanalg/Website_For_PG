// import React, { useState } from "react";
// import "./LoginScreen.css";
// import { Button, Form, Grid } from "semantic-ui-react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import "./LoginScreen.css";
// // import banner_img from "../assets/images/building_pic.png";

// const LoginScreen = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [activeScreen, setActiveScreen] = useState("login");

//   const loginValidation = Yup.object().shape({
//     userName: Yup.string().required("User name is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const forgotPasswordValidation = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//   });

//   const navigate = useNavigate();

//   return (
//     <div className="loginWrapper">
//       <Grid>
//         <Grid.Row>
//           <Grid.Column className="left_banner" width={8}>
//             {/* <img src={banner_img} alt="banner_img" /> */}
//           </Grid.Column>
//           <Grid.Column className="right_banner" id="loginContainer" width={8}>
//             {activeScreen === "login" ? (
//               <Formik
//                 initialValues={{ userName: "", password: "" }}
//                 validationSchema={loginValidation}
//                 onSubmit={async (values, { resetForm }) => {
//                   console.log(values, "values");
//                   resetForm();
//                 }}
//               >
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleSubmit,
//                   handleChange,
//                   handleBlur,
//                 }) => (
//                   <>
//                     <Form onSubmit={handleSubmit}>
//                       <h1 style={{ textAlign: "center", color: "black" }}>
//                         Login
//                       </h1>
//                       <Form.Field className="userName">
//                         <label>UserName</label>
//                         <input
//                           value={values.userName}
//                           name="userName"
//                           placeholder="Enter the username"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                         />
//                         {touched.userName && errors.userName && (
//                           <div className="error">{errors.userName}</div>
//                         )}
//                       </Form.Field>

//                       <Form.Field
//                         className="password"
//                         style={{ position: "relative" }}
//                       >
//                         <label>Password</label>
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={values.password}
//                           name="password"
//                           placeholder="Enter the password"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                         />

//                         <i
//                           className={`fa ${
//                             showPassword ? "fa-eye-slash" : "fa-eye"
//                           }`}
//                           onClick={() => setShowPassword((prev) => !prev)}
//                         />

//                         {touched.password && errors.password && (
//                           <div className="error">{errors.password}</div>
//                         )}
//                       </Form.Field>
//                       <div
//                         style={{
//                           textAlign: "right",
//                           color: "gold",
//                           margin: "1em",
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         {/* <span style={{ textAlign: "center", color: "black" }}>
//                           Don't have account? Sign up
//                         </span> */}
//                         <span
//                           style={{
//                             textAlign: "center",
//                             color: "black",
//                             cursor: "pointer",
//                           }}
//                           onClick={() => setActiveScreen("/register")}
//                         >
//                           Don't have account? Sign up
//                         </span>

//                         <span
//                           onClick={() => setActiveScreen("forgot")}
//                           style={{ cursor: "pointer", color: "black" }}
//                         >
//                           Forgot Password?
//                         </span>
//                       </div>

//                       <div className="buttonWrapper">
//                         <Button
//                           onClick={() => navigate("/offers")}
//                           type="submit"
//                         >
//                           Login
//                         </Button>
//                       </div>
//                     </Form>
//                   </>
//                 )}
//               </Formik>
//             ) : (
//               <div className="forgot-password-wrapper">
//                 <h1 style={{ textAlign: "center", color: "black" }}>
//                   Forgot Password
//                 </h1>

//                 <Formik
//                   initialValues={{ email: "" }}
//                   validationSchema={forgotPasswordValidation}
//                   // onSubmit={handleForgotPassword}
//                 >
//                   {({
//                     values,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     errors,
//                     touched,
//                     isSubmitting,
//                   }) => (
//                     <Form onSubmit={handleSubmit}>
//                       <Form.Field error={touched.email && !!errors.email}>
//                         <label>Email</label>
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Enter your email"
//                           value={values.email}
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                         />
//                         {touched.email && errors.email && (
//                           <div color="red" size="tiny">
//                             {errors.email}
//                           </div>
//                         )}
//                       </Form.Field>

//                       <div className="buttonWrapper">
//                         <Button
//                           type="submit"
//                           primary
//                           fluid
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? "Sending..." : "Send OTP"}
//                         </Button>
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "2rem",
//                     color: "black",
//                     margin: "1rem 0rem",
//                   }}
//                 >
//                   <span>Remember Password? </span>
//                   <span
//                     onClick={() => setActiveScreen("login")}
//                     style={{
//                       cursor: "pointer",
//                       color: "blue",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     Login
//                   </span>
//                 </div>

//                 {/* <Link to="/login">Login</Link> */}
//               </div>
//             )}

//             {/*  */}

//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </div>
//   );
// };

// export default LoginScreen;
import React, { useState } from "react";
import "./LoginScreen.css";
import { Button, Form, Grid } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeScreen, setActiveScreen] = useState("login");
  const navigate = useNavigate();

  // ---------------- VALIDATIONS ----------------
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

  // ---------------- FIREBASE HANDLERS ----------------
  // const handleLogin = async (values, { resetForm }) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, values.email, values.password);
  //     toast.success("Login successful!");
  //     navigate("/offers");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  //   resetForm();
  // };
  const ADMIN_EMAILS = ["admin@gmail.com"];

  const handleLogin = async (values, { resetForm }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const userEmail = userCredential.user.email;
  
      toast.success("Login successful!");
  
      // Check if admin
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
      setActiveScreen("login");
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
            {/* You can add an image or logo here */}
          </Grid.Column>

          <Grid.Column className="right_banner" id="loginContainer" width={8}>
            {/* ---------------- LOGIN SCREEN ---------------- */}
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
                        margin: "1em",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveScreen("register")}
                      >
                        Don't have an account? Sign up
                      </span>

                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveScreen("forgot")}
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

            {/* ---------------- REGISTER SCREEN ---------------- */}
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
                        // className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
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
                        onClick={() => setActiveScreen("login")}
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

            {/* ---------------- FORGOT PASSWORD SCREEN ---------------- */}
            {activeScreen === "forgot" && (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={forgotPasswordValidation}
                onSubmit={(values) => {
                  toast.info(`Password reset link sent to ${values.email}`);
                  setActiveScreen("login");
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
                        onClick={() => setActiveScreen("login")}
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

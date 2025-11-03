// // src/components/Register.js
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   function handelGoogleLogin() {
//   }
//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Sign Up</button>
//         <button
//           onClick={handelGoogleLogin}
//           className="btn btn-outline border-gray-200 font-medium rounded w-full mt-6"
//         >
//           <FcGoogle className="text-xl"></FcGoogle> Sign in with Google
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful ✅");
      navigate("/login"); // redirect after success
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Sign-In successful ✅");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleRegister} className="register-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-btn">Register</button>
      </form>

      <p className="divider">or</p>

      <button className="google-btn" onClick={handleGoogleSignIn}>
        <FcGoogle size={22} style={{ marginRight: 8 }} />
        Continue with Google
      </button>

      <p className="login-link">
        Already have an account? <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}

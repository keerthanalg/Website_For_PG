// import "./App.css";
import DefaultHeader from "./global/components/DefaultHeader";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import BookVisitScreen from "./screens/BookVisitScreen";
// import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import Offersandupdate from "./screens/Offersandupdate";
import DefaultFooter from "./global/components/DefaultFooter";
// import Register from "./screens/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./screens/AdminScreen";

function App() {
  const location = useLocation();

  const hideLayout = ["/login"];
  const shouldHide = hideLayout.includes(location.pathname);
  return (
    // <Router>
    <div className="app">
      {!shouldHide && <DefaultHeader />}
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/bookvisit" element={<BookVisitScreen />} />
        <Route path="/offers" element={<Offersandupdate />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/register" element={<LoginScreen />} />
        <Route path="/forgot" element={<LoginScreen />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      {!shouldHide && <DefaultFooter />}
    </div>
    // </Router>
  );
}

export default App;

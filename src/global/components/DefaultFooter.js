import React from "react";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";

const DefaultFooter = () => {
  return (
    <>
      <div className="footer">
        <ul>
          <li>
            <h3>Legal & Accessibility</h3>
          </li>
          <li>Privacy Policy</li>
          <li>User Agreement</li>
          <li>Terms and Conditions</li>
        </ul>

        <ul>
          <li>
            <h3>Our Branches</h3>
          </li>
          <li>Bangalore</li>
          <li>Chennai</li>
          <li>Hyderabad</li>
        </ul>
        <ul>
          <li>
            <h3>Help</h3>
          </li>
          <li>Blogs</li>
          <li>About US</li>
          <li>FAQ's</li>
        </ul>
        <ul>
          <li>
            <h3>Contact Us</h3>
          </li>
          <li>Happy Stay</li>
          <li>Bangalore</li>

          <li>
            <a href="mailto:happystay@gmail.com">happystay@gmail.com</a>
          </li>
          <li>
            <a href="tel:+919876543210">+91 9876543210</a>
          </li>
        </ul>
      </div>
      <div className="footer_followus_wrapper">
        <p>FOLLOW US ON: </p>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            listStyleType: "none",
            padding: "0",
            backgroundColor: "white",
          }}
        >
          <li>
            <img width="50px" src={facebook} alt="facebook" />
          </li>
          <li>
            <img width="50px" src={twitter} alt="twitter" />
          </li>
          <li>
            <img width="50px" src={instagram} alt="instagram" />
          </li>
          <li>
            <img width="50px" src={linkedin} alt="linkedin" />
          </li>
        </ul>
        <h4>copyright &copy; 2025</h4>
      </div>
    </>
  );
};
export default DefaultFooter;

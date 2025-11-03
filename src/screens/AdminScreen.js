import React from "react";
import { Grid, Image } from "semantic-ui-react";
import wifi from "../assets/icons/wifi.png";

const AdminScreen = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <div style={{  display: "grid" }}>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              Dashboard
            </div>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              Customer Details
            </div>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              Payment Details
            </div>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              Feedbacks
            </div>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              Pending
            </div>
            <div id="image" style={{  display: "inline-flex", alignItems:"center" }}>
              <Image size="tiny" src={wifi} alt="icon" />
              New Booking
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={12}>
          <h4>LandingScreen</h4>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AdminScreen;

import React from "react";
import "./home.css";
import {
  Button,
  Card,
  Grid,
  GridColumn,
  GridRow,
  Image,
} from "semantic-ui-react";
import wifi from "../assets/icons/wifi.png";
import kitchen from "../assets/icons/kitchen_area.png";
import laundry from "../assets/icons/laundry.png";
import living_space from "../assets/icons/living_room.png";
import reading_area from "../assets/icons/reading_area.png";
import power_backup from "../assets/icons/power_backup.png";
import parking from "../assets/icons/parking.png";
import supportive from "../assets/icons/suppotive.png";

import { useNavigate } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

const HomeScreen = () => {
  const navigate = useNavigate();
  const featuresData = [
    {
      header: {
        image: wifi,
      },
      description: {
        title: "High-Speed Internet & Smart Security",
        description:
          "Enjoy 24/7 free Wi‑Fi throughout the PG, secured with CCTV surveillance and biometric entry for safe, seamless access.",
      },
    },
    {
      header: {
        image: kitchen,
      },
      description: {
        title: "Nutritious Meals & Self-Cooking Options",
        description:
          "Relish three home-style meals with evening snacks daily, or cook your own food in our fully equipped kitchen with fridge, utensils, and groceries.",
      },
    },
    {
      header: {
        image: laundry,
      },
      description: {
        title: "Laundry & Hygiene Facilities",
        description:
          "Use our washing machines, drying area, and traditional self-washing stones — all in a clean and hygienic environment.",
      },
    },
    {
      header: {
        image: living_space,
      },
      description: {
        title: "Comfortable Living Spaces",
        description:
          "Well-ventilated rooms with AC options and 24/7 hot and cold water for both drinking and bathing.",
      },
    },
    {
      header: {
        image: reading_area,
      },
      description: {
        title: "Reading & Recreation Area",
        description:
          "Access general knowledge books and comic storybooks in our relaxing library corner or enjoy your time in the cozy TV lounge.",
      },
    },
    {
      header: {
        image: power_backup,
      },
      description: {
        title: "Uninterrupted Utilities",
        description:
          "Experience uninterrupted electricity with full power backup and easy access through our building elevator.",
      },
    },
    {
      header: {
        image: parking,
      },
      description: {
        title: "Safe & Convenient Parking",
        description:
          "Dedicated two-wheeler parking area ensures your vehicle is safely and conveniently parked.",
      },
    },
 
    {
      header: {
        image: supportive,
      },
      description: {
        title: "Supportive & Empowering Environment",
        description:
          "A women-only community designed to foster independence, comfort, and a welcoming atmosphere.",
      },
    },
  ];

  // const whyYouShould = [
  //   {
  //     "title": "Safe & Secure Living",
  //     "description": "Biometric entry and CCTV surveillance ensure maximum safety and peace of mind."
  //   },
  //   {
  //     "title": "Comfort That Feels Like Home",
  //     "description": "AC rooms, power backup, and hygienic home-style meals create a truly homely environment."
  //   },
  //   {
  //     "title": "Empowering Facilities",
  //     "description": "From self-cooking to laundry to a fully stocked library — live independently and confidently."
  //   },
  //   {
  //     "title": "Supportive Community",
  //     "description": "Live among like-minded women in a positive and respectful environment."
  //   },
  //   {
  //     "title": "24/7 Amenities",
  //     "description": "Whether it's Wi-Fi, study space, or hot water — everything is available when you need it."
  //   },
  //   {
  //     "title": "Prime Location",
  //     "description": "Strategically located with easy access to schools, colleges, offices, and public transport."
  //   },
  //   {
  //     "title": "Transparent Pricing",
  //     "description": "No hidden charges. Everything you need at a fair and affordable price."
  //   }
  // ];

  return (
    <div className="homeScreenWrapper">
      <div className="homeBanner">
        <div>
          <h1>
            Discover Your Home Away From <br />
            Home
          </h1>
          <h5>Experience comfort and convenience in our top rated PG</h5>
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <div className="cardWrapper">
          <Grid columns={4}>
            <GridRow>
              {featuresData.map((e) => (
                <GridColumn>
                  <Card className="cards" key={e.description.title}>
                    <Image
                      centered
                      src={e.header.image}
                      alt="logo"
                      size="tiny"
                    />
                    <h3>{e.description.title}</h3>
                    <p>{e.description.description}</p>
                    {console.log(e.description.title, "wow")}
                  </Card>
                </GridColumn>
              ))}
            </GridRow>
          </Grid>
        </div>
      </div>
      <div className="whyUsWrapper">
        <h2>Why Choose Us</h2>
        <div className="whyUs">
          <h4>Experience the Best in Women’s Accommodation</h4>
          <span>
            At Happy Stay, we prioritize your safety, convenience, and peace of
            mind. Whether you're a student, working professional, or relocating
            for opportunities, we offer the ideal place to live, grow, and
            thrive.
          </span>
          <div className="btnWrapper">
            <Button onClick={()=>navigate('/bookvisit')}>Book Your Visit Today</Button>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

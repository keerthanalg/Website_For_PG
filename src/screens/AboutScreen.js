import React from "react";
import { Grid, Image } from "semantic-ui-react";
import building_img from "../assets/images/building_pic.png";
import single from "../assets/images/single.jpg";
import double from "../assets/images/double.jpg";
import triple from "../assets/images/triple.png";
import dinning from "../assets/images/dinning_hall.jpg";
import washing from "../assets/images/washing_area.jpg";
import tv_hall from "../assets/images/tv_hall.png";
import relaxing from "../assets/images/relaxing_area.jpg";
import kitchen from "../assets/images/kitchen.png";
import reception from "../assets/images/reception.png";
import parking_area from "../assets/images/parking_area.png";
import Coverflow from "react-coverflow";
import "./about.css";

const AboutScreen = () => {
  const imageList = [
    { src: single, label: "Single Sharing Room" },
    { src: double, label: "Double Sharing Room" },
    { src: triple, label: "Triple Sharing Room" },
    { src: dinning, label: "Dining Area" },
    { src: washing, label: "Laundry Room" },
    { src: tv_hall, label: "TV Lounge" },
    { src: relaxing, label: "Relaxation Zone" },
    { src: kitchen, label: "Modern Kitchen" },
    { src: reception, label: "Reception Area" },
    { src: parking_area, label: "Two-Wheeler Parking" },
  ];

  const residentDetails = [
    {
      title: "Our Branches",
      description:
        "Spanning across Chennai, Bangalore, Hyderabad, Coimbatore, Pune, and Kochi, all offering the same trusted experience.",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "Events & Celebrations",
      description:
        "Cultural fests, wellness sessions, birthday and festival celebrations to make every resident feel at home.",
      icon: "fas fa-birthday-cake",
    },
    {
      title: "Occupancy Rate",
      description:
        "Consistent trust and high retention from students and professionals alike.",
      icon: "fas fa-users",
    },
  ];

  return (
    <div className="aboutWrapper">
      <Grid>
        <Grid.Row style={{ height: "49rem",  padding: "1rem 0 0 0" }}>
          <Grid.Column  width={12} className="aboutus_img">
            <img
              src={building_img}
              alt="building_img"
              height={"72%"}
              width={"100%"}
            />
          </Grid.Column>
          <Grid.Column width={4} className="about_detail">
            <h1 style={{ fontSize: "4rem" }}>About Us</h1>
            <p className="intro">
              Happy Stay is more than just a PG—it’s a community built on trust,
              comfort, and convenience. Founded with the vision of creating a
              safe and homely space for women, our PG blends modern amenities
              with a nurturing environment. Our team is committed to providing
              high standards of cleanliness, security, and personalized
              services, ensuring that every resident feels at home from day one.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          {residentDetails.map((item, index) => (
            <Grid.Column>
              <div className="residents_details" key={index}>
                <i className={item.icon}></i>
                <p
                  style={{
                    margin: " 8px 0px 0px",
                    color: "rgb(255, 179, 0)",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    padding: "0rem 1rem",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
        {/* section 2 */}
        <Grid.Row style={{ padding: "3em" }}>
          <Grid.Column width={9}>
            <h2>Our Story</h2>
            <p>
              Happy Stay was founded in 2020 with a mission to provide safe,
              affordable, and comfortable accommodation specifically tailored
              for women. What started as a humble setup with just 5 rooms has
              grown into one of the most trusted PG accommodations in the city.
            </p>
            <br />
            <p>
              We believe in building a community where women feel empowered,
              supported, and at ease.
            </p>
          </Grid.Column>
          <Grid.Column width={7}>
            <h2>Our Philosophy</h2>
            <li>Women Empowerment through Independence</li>
            <li>Respect for Diversity, Inclusion & Personal Growth</li>
            <li>Hygiene & Cleanliness are Non-Negotiable</li>
            <li>Safety is Our Top Priority</li>
          </Grid.Column>
        </Grid.Row>

        {/* section 3 */}
        <Grid.Row style={{ backgroundColor: "#f2f2f2", padding: "3em" }}>
          <Grid.Column width={9}>
            <h2>What Makes Us Different?</h2>
            <li>Resident community managers for daily support</li>
            <li>
              Monthly wellness and celebration events (birthdays, festivals)
            </li>
            <li>Female-only staff and caretakers</li>
            <li>Feedback-driven improvements every quarte</li>
          </Grid.Column>
          <Grid.Column width={7}>
            <h2>Our Team</h2>
            <p>
              Priya Desai – Founder & Manager (Hospitality Experience: 10+
              years)
            </p>
            <p>Aarti Kumari – Head of Housekeeping</p>
            <p>Meena Sharma – In-house Cook</p>
            <p>Sushma Jain – Resident Relations Manager</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* section 4 */}

      <Grid centered>
        <Grid.Row>
          <Grid.Column verticalAlign="top">
            <h2>Join Our Happy Stay Family</h2>
            <p style={{ textAlign: "center" }}>
              Whether you're here for a semester, a project, or your first job —
              Happy Stay is your second home. Come as a guest, leave as a
              friend.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <h2 style={{ textAlign: "center" }}>Gallery</h2>
      <div className="gallery">
        <Coverflow
          width="960"
          height="400"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
          infiniteScroll={true}
        >
          {imageList.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.label}
              style={{
                height: "250px",
                width: "500px",
                border: "15px solid #ffb300",
              }}
            />
          ))}
        </Coverflow>
      </div>
    </div>
  );
};

export default AboutScreen;

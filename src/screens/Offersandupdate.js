import { Grid } from "semantic-ui-react";
import "./offers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Formik } from "formik";
// import { queries } from "@testing-library/react";
import * as Yup from "yup";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { feedbackdb } from "../firebase";

// import kitchen from "../assets/icons/kitchen_area.png";

const Offersandupdate = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <button className="custom-prev"></button>,
    nextArrow: <button className="custkom-next"></button>,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    room_no: Yup.string().required("Room number is required"),
    message: Yup.string().required("Message is required"),
    type: Yup.string().required("Please select one option"),
  });

  const handleFormSubmit = async (values, {resetForm}) => {
    console.log('Form Values:', values)
    try {
      await addDoc(collection(feedbackdb, "feedbackAndqueries"), {
        ...values,
        submittedAt: Timestamp.now()
      });
      alert("Feedback submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const weeklyMenu = [
    {
      day: "Monday",
      meals: {
        Breakfast: "Idli with Sambar & Coconut Chutney, Tea/Coffee",
        Lunch: "Rice, Sambar, Potato Fry, Papad, Curd",
        Snacks: "Masala Sundal + Tea",
        Dinner: "Chapati with Kurma, Pickle",
      },
    },
    {
      day: "Tuesday",
      meals: {
        Breakfast: "Pongal with Vada & Chutney, Tea",
        Lunch: "Rice, Rasam, Beans Poriyal, Buttermilk",
        Snacks: "Samosa + Tea",
        Dinner: "Lemon Rice with Chips",
      },
    },
    {
      day: "Wednesday",
      meals: {
        Breakfast: "Poori with Masala, Tea",
        Lunch: "Rice, Kara Kuzhambu, Cabbage Poriyal, Appalam",
        Snacks: "Onion Pakoda + Tea",
        Dinner: "Roti with Mixed Veg Curry",
      },
    },
    {
      day: "Thursday",
      meals: {
        Breakfast: "Dosa with Chutney & Sambar",
        Lunch: "Vegetable Biryani, Raita, Brinjal Curry",
        Snacks: "Banana Bajji + Coffee",
        Dinner: "Idiyappam with Coconut Milk",
      },
    },
    {
      day: "Friday",
      meals: {
        Breakfast: "Upma with Coconut Chutney",
        Lunch: "Rice, Mor Kuzhambu, Yam Fry, Pickle",
        Snacks: "Vegetable Cutlet + Tea",
        Dinner: "Tomato Rice with Raita",
      },
    },
    {
      day: "Saturday",
      meals: {
        Breakfast: "Appam with Vegetable Stew",
        Lunch: "Chicken Biryani / Veg Biryani, Onion Raita, Egg",
        Snacks: "Murukku + Tea",
        Dinner: "Chapati with Paneer Butter Masala",
      },
    },
    {
      day: "Sunday",
      meals: {
        Breakfast: "Bread Omelette / Jam Bread, Tea",
        Lunch: "Special Meals: Sambar, Rasam, Kootu, Poriyal, Sweet",
        Snacks: "Cake / Puff + Tea",
        Dinner: "Veg Noodles with Gobi Manchurian",
      },
    },
  ];

  return (
    <div className="offersWrapper">
      <h1>Welcome to our happy stay PG</h1>
      <h2>Offers & Updates</h2>
      <p style={{ fontSize: "20px", textTransform: "uppercase" }}>
        stay informed, stay happy see our latest updates and services
      </p>
      <Grid>
        <Grid.Row className="offers_first_row">
          <Grid.Column width={5}>
            <h2>Offers and Discounts</h2>
            <p>Festival Offers</p>
            <p>Birthday Week Surprise</p>
            <p>Long-Term Stay Offer</p>
            <p>Group Joining Discount</p>
          </Grid.Column>

          <Grid.Column width={5}>
            <h2>Announcements</h2>
            <p>Due to maintanence today water and power supply shut down</p>
          </Grid.Column>

          <Grid.Column width={6}>
            <h2>Feedback & Queries</h2>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                name: "",
                room_no: "",
                message: "",
                type:""
              }}
              onSubmit={handleFormSubmit}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
              }) => (

                <form   
                  style={{ padding: "1rem 13rem" }}
                  onSubmit={handleSubmit}
                >
                  <input
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <div className="error">{errors.name}</div>
                  )}
                  <br /> <br />
                  <input
                    placeholder="Room No."
                    name="room_no"
                    value={values.room_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.room_no && errors.room_no && (
                    <div className="error">{errors.room_no}</div>
                  )}
                  <br /> <br />
                  <textarea
                    style={{ padding: "1em  1.6em  1em 0.6em" }}
                    placeholder="Message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && (
                    <div className="error">{errors.message}</div>
                  )}
                  <br /> <br />
                  <div
                    style={{
                      display: "inline-block",
                      gap: "2rem",
                      alignItems: "center",
                    }}
                  >
                    <label>
                      <input
                        style={{ margin: "0.3rem" }}
                        type="radio"
                        name="type"
                        value="Feedback"
                        checked={values.type === "Feedback"}
                        onChange={handleChange}
                      />
                      Feedback
                    </label>
                
                    <label>
                      <input
                        style={{ margin: "0.3rem" }}
                        type="radio"
                        name="type"
                        value="Queries"
                        checked={values.type === "Queries"}
                        onChange={handleChange}
                      />
                      Support & Queries
                    </label>
                    {touched.type && errors.type && (
                      <div className="error">{errors.type}</div>
                    )}
                  </div>
                  <button type="submit">Submit</button>
                </form>
              )}
            </Formik>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="offers_second_row">
          <Grid.Column width={16}>
            <Slider {...settings}>
              {weeklyMenu.map((dayItem, index) => (
                <div key={index}>
                  <h3>{dayItem.day}</h3>
                  <Grid>
                    {Object.entries(dayItem.meals).map(
                      ([mealType, mealText], i) => (
                        <Grid.Row key={i}>
                          <Grid.Column width={8} textAlign="center">
                            <strong>{mealType}</strong>
                          </Grid.Column>
                          <Grid.Column width={8} textAlign="center">
                            {mealText}
                          </Grid.Column>
                          {/* <Grid.Column width={5} textAlign="center">
                            <Image
                              size="mini"
                              src={kitchen}
                              alt="kitchen"
                              verticalAlign="middle"
                            />
                          </Grid.Column> */}
                        </Grid.Row>
                      )
                    )}
                  </Grid>
                </div>
              ))}
            </Slider>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Offersandupdate;


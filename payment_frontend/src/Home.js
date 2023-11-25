import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import Img from "./assets/Img.jpg";
import Cup from "./assets/Img2.jpg";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "React Developer Yaman",
      description: "Payment Gateway Learning",
      image:
        "https://www.google.com/search?q=images+of+e+commerce+website+FLIPKART&tbm=isch&ved=2ahUKEwiyj-2krNmCAxWDpekKHfNLC1MQ2-cCegQIABAA&oq=images+of+e+commerce+website+FLIPKART&gs_lcp=CgNpbWcQAzoECCMQJ1DLCFiaG2C1IGgAcAB4AIAB5gOIAc4WkgEHMi03LjIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Ut1eZbKeG4PLpgfzl62YBQ&bih=619&biw=1366&rlz=1C1VDKB_enIN1070IN1070#imgrc=plGsgDScZThadM",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar", //sample from website
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#a83287",
      },
    };
    var razor = new window.Razorpay(options);

    razor.open();
  };
  return (
    <>
      <Box>
        <Stack direction={["column", "row"]} spacing={4}>
          <Card amount={5000} img={Img} checkoutHandler={checkoutHandler} />
          <Card amount={5000} img={Cup} checkoutHandler={checkoutHandler} />
          <Card amount={5000} img={Img} checkoutHandler={checkoutHandler} />
        </Stack>
      </Box>
    </>
  );
};

export default Home;

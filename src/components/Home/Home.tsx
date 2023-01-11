import { Divider } from "@chakra-ui/react";
import React from "react";
import Experience from "./experience";
import MainPage from "./mainPage";
import Navbar from "./navbar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Divider
        borderColor="#7B4AE233"
        color="#7B4AE233"
        backgroundColor="#7B4AE233"
      />
      <Experience />
      <Divider
        borderColor="#7B4AE233"
        color="#7B4AE233"
        backgroundColor="#7B4AE233"
      />
    </>
  );
};

export default Home;

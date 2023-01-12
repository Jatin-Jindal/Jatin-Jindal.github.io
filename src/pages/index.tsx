import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Skills from "../components/Skills";

interface indexProps {}

export const Index: React.FC<indexProps> = ({}) => {
  return (
    <Box>
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Index;

import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import Skills from "../components/Skills";

interface indexProps {}

export const Index: React.FC<indexProps> = ({}) => {
  return (
    <Box>
      <Home />
      <About />
      <Skills />
    </Box>
  );
};

export default Index;

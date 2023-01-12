import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Home from "../components/Home";

interface indexProps {}

export const Index: React.FC<indexProps> = ({}) => {
  return (
    <Box>
      <Home />
      <About />
    </Box>
  );
};

export default Index;

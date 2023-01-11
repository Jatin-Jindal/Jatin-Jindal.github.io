import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import ExpCard from "./ExpCard";
import CodeIcon from "./assets/CodeIcon.svg";
import DesignIcon from "./assets/DesignIcon.svg";
import ProjectsIcon from "./assets/ProjectsIcon.svg";

interface ExperienceProps {
  image?: string;
}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <Center>
      <Grid
        mt="6em"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={20}
      >
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard numYears={5} activity="Programming" icon={CodeIcon} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard
            numYears={7}
            activity="Learning"
            icon={ProjectsIcon}
            filled={true}
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard numYears={4} activity="Coding" icon={DesignIcon} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Experience;

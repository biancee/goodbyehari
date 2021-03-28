import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  HStack,
  Grid,
  Flex,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import MessageCard from "./MessageCard";
import Footer from "./Footer";

function Homepage() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/GetMessages`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <Grid
      id="bg"
      minH="100vh"
      p={3}
      bgImage="url('/images/mesh-hero-small.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box>
        <nav>
          <HStack
            spacing={8}
            color="#fff"
            bg="#4447b3"
            w="150px"
            textAlign="center"
            justifyContent="center"
            borderRadius="lg"
            p="2"
          >
            <Link to="/writemessage">Ecrire un message</Link>
          </HStack>
        </nav>
      </Box>
      <Flex w="100%" justifyContent="center">
        <Logo h="40vmin" pointerEvents="none" />
      </Flex>
      <Box>
        <Text fontSize="6xl" color="#fff" textAlign="center">
          {"Messages d'aurevoir à Hari"}
        </Text>
      </Box>
      <Flex id="msgbox" justifyContent="space-between" flexWrap="wrap">
        {data ? (
          data.map((item) => {
            return <MessageCard data={item} key={item._id} />;
          })
        ) : (
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            w="100%"
            color="#fff"
          >
            <Spinner size="xl" />
          </Stack>
        )}
      </Flex>
      <Footer />
    </Grid>
  );
}

export default Homepage;

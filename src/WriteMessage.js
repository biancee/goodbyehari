import React, { useState } from "react";
import {
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  HStack,
  Grid,
  Text,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import Footer from "./Footer";

function WriteMessage() {
  const [value, setValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/PostMessage`, {
      method: "POST",
      body: JSON.stringify({ name: nameValue, message: value }),
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setIsPublished(true);
        console.log(isPublished);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      });
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    if (e.target.id === "name") {
      setNameValue(inputValue);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <Grid
      id="bg"
      minH="100vh"
      p={3}
      bgImage="url('/images/mesh-footer-small.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box w="100%">
        <nav>
          <HStack spacing={8} color="#fff">
            <Link to="/"> {"<Retour à la page d'accueil"} </Link>
          </HStack>
        </nav>
      </Box>
      <Flex w="100%" justifyContent="center" paddingTop="24">
        {!isPublished ? (
          <form onSubmit={handleSubmit} id="msg" w="30%">
            <FormControl marginBottom="2">
              <FormLabel color={"#fff"}>Votre nom</FormLabel>
              <Input
                type="name"
                id="name"
                bgColor={"#fff"}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={"#fff"}>Votre message</FormLabel>
              <Textarea
                id="text"
                bgColor={"#fff"}
                onChange={handleInputChange}
                placeholder="Votre message"
                size="md"
                rows="5"
                mb="2"
              />
              <Button
                colorScheme="blue"
                type="submit"
                id="btn"
                isDisabled={nameValue.length === 0 ? true : false}
              >
                Publier
              </Button>
            </FormControl>
          </form>
        ) : (
          <Text fontSize="5xl" color="#fff">
            Envoyé !
          </Text>
        )}
      </Flex>
      <Footer position={"absolute"} />
    </Grid>
  );
}

export default WriteMessage;

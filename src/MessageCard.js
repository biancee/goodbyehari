import React from "react";
import { Box, Text } from "@chakra-ui/react";

function MessageCard({ data }) {
  console.log(data.data);
  const { message, name } = data.data;
  return (
    <Box
      w="47%"
      p={4}
      color="white"
      borderWidth="1px"
      borderRadius="lg"
      bg="#fff"
      m={2}
      boxShadow="2px 10px 30px rgb(165 17 17 / 20%)"
      justifyContent="center"
    >
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        color="gray.500"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        <Text mr="2">{name}</Text>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        lineHeight="tight"
        isTruncated
        color="#4447b3"
        whiteSpace="initial"
      >
        <Text>{message}</Text>
      </Box>
    </Box>
  );
}

export default MessageCard;

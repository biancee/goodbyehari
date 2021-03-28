import React from "react";
import { Flex, Link } from "@chakra-ui/react";

function Footer({ position }) {
  return (
    <Flex
      justifyContent="center"
      padding="4"
      color="blue"
      position={position}
      bottom="0"
      fontSize="sm"
    >
      <footer>
        {" "}
        Fait par{" "}
        <span role="img" aria-label="emoji">
          💁🏾
        </span>{" "}
        <Link
          href="https://youtu.be/agCgvFTJeRs?t=33"
          textDecoration="underline"
          target="_blank"
        >
          Biancé
        </Link>
      </footer>
    </Flex>
  );
}

export default Footer;

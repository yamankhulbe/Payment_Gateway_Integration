import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <>
      <VStack backgroundColor={"#a4ad93"}>
        <Image src={img} boxSize="500px" objectFit="cover" />
        <Text>${amount}</Text>
        <Button
          backgroundColor={"#7dc7a3"}
          onClick={() => checkoutHandler(amount)}
        >
          Buy now
        </Button>
      </VStack>
    </>
  );
};

export default Card;

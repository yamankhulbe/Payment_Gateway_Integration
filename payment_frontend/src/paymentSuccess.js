import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  console.log(searchQuery.get("reference"), "search params");
  const referenceNo = searchQuery.get("reference");

  return (
    <>
      <Box>
        <VStack h="100vh" justifyContent={"center"}>
          <Heading textTransform={"uppercase"}>Order Successful</Heading>
          <Text>{referenceNo}</Text>
        </VStack>
      </Box>
    </>
  );
};

export default PaymentSuccess;

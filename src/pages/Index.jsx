import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // First API call to generate signature
      const signatureResponse = await fetch("https://tmgames.catague.app/icore/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const signatureResult = await signatureResponse.json();
      const signature = signatureResult.signature;

      // Second API call to process payment
      const paymentResponse = await fetch("https://icoredev.tech:8835/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, signature }),
      });

      const paymentResult = await paymentResponse.json();
      setResponse(JSON.stringify(paymentResult, null, 2));
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        API Payment Process
      </Heading>

      <Box p={6} borderRadius="md" boxShadow="lg" bg="white" mb={8}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Service ID</FormLabel>
              <Input name="service_id" defaultValue="ncpay_stpay" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" defaultValue="NWbEOmSGFbPqN645cBwA" />
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input name="amount" defaultValue="30000" />
            </FormControl>
            <FormControl>
              <FormLabel>Currency</FormLabel>
              <Input name="currency" defaultValue="PHP" />
            </FormControl>
            <FormControl>
              <FormLabel>Operation ID</FormLabel>
              <Input name="operation_id" defaultValue="DEVTESTING2" />
            </FormControl>
            <FormControl>
              <FormLabel>Payment ID</FormLabel>
              <Input name="payment_id" defaultValue="DEVTESTING2" />
            </FormControl>
            <FormControl>
              <FormLabel>Method</FormLabel>
              <Input name="method" defaultValue="sp-qrph" />
            </FormControl>
            <FormControl>
              <FormLabel>Callback URL</FormLabel>
              <Input name="callback_url" defaultValue="https://hook.eu2.make.com/pytgd1w8lbliqebihqil0q55h5ax0t3j" />
            </FormControl>
            <FormControl>
              <FormLabel>Return URL</FormLabel>
              <Input name="return_url" defaultValue="https://codepen.io/Marc-Agbay-the-scripter/live/jORzYaa" />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Account Number</FormLabel>
              <Input name="customer_account_number" defaultValue="1234567890" />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Name</FormLabel>
              <Input name="customer_name" defaultValue="Juan Dela Cruz" />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Email</FormLabel>
              <Input name="customer_email" defaultValue="juan.dela_cruz@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Address</FormLabel>
              <Input name="customer_address" defaultValue="Manila, PH" />
            </FormControl>
            <FormControl>
              <FormLabel>Customer Remark</FormLabel>
              <Input name="customer_remark" defaultValue="This is a Testing." />
            </FormControl>
            <FormControl>
              <FormLabel>Merchant Name</FormLabel>
              <Input name="merchant_name" defaultValue="icore" />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg">
              Start Payment Process
            </Button>
          </VStack>
        </form>
      </Box>

      {response && (
        <Box p={6} borderRadius="md" boxShadow="lg" bg="white">
          <Heading as="h2" size="lg" mb={4}>
            API Response
          </Heading>
          <Text whiteSpace="pre-wrap">{response}</Text>
        </Box>
      )}
    </Container>
  );
};

export default Index;

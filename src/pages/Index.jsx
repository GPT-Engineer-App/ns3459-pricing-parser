import React, { useState } from "react";
import { Button, Input, VStack, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Removed parseXML function as xml2js is not allowed in project dependencies

  return (
    <Container maxW="container.xl">
      <VStack spacing={4} align="stretch" mt={10}>
        <Heading as="h1" size="xl">
          NS3459 Pricing Converter
        </Heading>
        <Text>Upload your NS3459 XML file to view the pricing details.</Text>
        <Input type="file" accept=".xml" onChange={handleFileChange} />
        {}
        <Text>Please contact the administrator to enable XML parsing.</Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {parsedData && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Chapter</Th>
                <Th>Description</Th>
                <Th>Unit Price</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Example of rendering parsed data */}
              {parsedData.NS3459.Pristilbud.Poster.Post.map((post, index) => (
                <Tr key={index}>
                  <Td>{post.Postnr}</Td>
                  <Td>{post.Tekst.Uformatert}</Td>
                  <Td>{post.Prisinfo.Enhetspris}</Td>
                  <Td>{post.Prisinfo.Sum}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </VStack>
    </Container>
  );
};

export default Index;

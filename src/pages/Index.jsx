import React, { useState } from "react";
import { Button, Input, VStack, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { parseStringPromise } from "xml2js";

const Index = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const xml = e.target.result;
          const result = await parseStringPromise(xml);
          setParsedData(result);
          setError("");
        } catch (err) {
          setError("Failed to parse XML file.");
        }
      };
      reader.readAsText(file);
    }
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
              {parsedData.NS3459.Pristilbud.Poster.Post.filter((post) => post.Postnrdeler.Postnrdel.some((nrdel) => nrdel.Type === "Type1" && nrdel.Kode === "36")).map((post, index) => (
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

import React, { useState } from "react";
import { Button, Input, VStack, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { XMLParser } from 'fast-xml-parser';


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
        const xml = e.target.result;
        try {
          const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
            textNodeName: "#text",
            allowBooleanAttributes: true,
          });
          const result = parser.parse(xml);
          await setParsedData(result); // Adjust this line based on how you process the XML
          console.log(result);
          console.log(parsedData?.NS3459?.Pristilbud?.ProsjektNS?.Poster);
          setError("");
        } catch (err) {
          console.log(err);
          setError("Failed to parse XML file.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={4} align="stretch" mt={10}>
        <Heading as="h1" size="xl">
          NS3459 Pricing Converter 2
        </Heading>
        <Text>Upload your NS3459 XML file to view the pricing details.</Text>
        <Input type="file" accept=".xml" onChange={handleFileChange} />
        {parsedData && (<p>{parsedData.NS3459.Pristilbud.Generelt.ProgramNavn}</p>)}
        {parsedData && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Chapter</Th>
                <Th>Description</Th>
                <Th>Mengderegel</Th>
                <Th>Enhet</Th>
                <Th>Mengde</Th>
              </Tr>
            </Thead>
            <Tbody>
              {parsedData.NS3459?.Pristilbud?.ProsjektNS?.Poster?.Post.map((post, index) => (
                <Tr key={index}>
                  <Td>{post.Postnr}</Td>
                  <Td>{post.Tekst?.Uformatert}</Td>
                  <Td>{post.Prisinfo?.Mengderegel}</Td>
                  <Td>{post.Prisinfo?.Enhet}</Td>
                  <Td>{post.Prisinfo?.Mengde}</Td>
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
      </VStack>
    </Container>
  );
};

export default Index;

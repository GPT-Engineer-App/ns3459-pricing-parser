import React, { useState } from "react";
import { Button, Input, VStack, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Container, Alert, AlertIcon, Image } from "@chakra-ui/react";
import { XMLParser } from "fast-xml-parser";

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
        <Image src="/lindab.png" alt="Lindab Logo" boxSize="160px" objectFit="contain" alignSelf="flex-start" className="no-print" />{" "}
        <Heading as="h1" size="xl">
          Lindab programanbud hjelper (NS3459)
        </Heading>
        <Text>Last opp din NS3459 XML-fil for å se prisdetaljer.</Text>
        <Input type="file" accept=".xml" onChange={handleFileChange} />
        {parsedData && (
          <VStack align="stretch" mt={4}>
            <Text fontWeight="bold">Generell Informasjon:</Text>
            <Text>Dato: {parsedData.NS3459.Pristilbud.Generelt.Dato}</Text>
            <Text>Avsender: {parsedData.NS3459.Pristilbud.Generelt.Avsender.Person.Navn}</Text>
            <Text>Firma: {parsedData.NS3459.Pristilbud.Generelt.Avsender.Firma.Navn}</Text>
            <Text>Program Navn: {parsedData.NS3459.Pristilbud.Generelt.ProgramNavn}</Text>
            <Text>Program Versjon: {parsedData.NS3459.Pristilbud.Generelt.ProgramVersjon}</Text>
          </VStack>
        )}
        {parsedData && <p>{parsedData.NS3459.Pristilbud.Generelt.ProgramNavn}</p>}
        {parsedData && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Postnr.</Th>
                <Th>Beskrivelse</Th>
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

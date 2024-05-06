import React, { useState } from "react";
import { Button, Input, VStack, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Container, Alert, AlertIcon, Image } from "@chakra-ui/react";
import { XMLParser } from "fast-xml-parser";

const Index = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [inputs, setInputs] = useState({});
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

          // Determine if the root is Prisforesporsel or Pristilbud
          const rootKey = result.NS3459.Prisforesporsel ? "Prisforesporsel" : "Pristilbud";

          await setParsedData(result.NS3459[rootKey]); // Use the determined root key
          console.log(result);
          setError("");
        } catch (err) {
          console.log(err);
          setError("Failed to parse XML file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const exportToXML = () => {
    const itemsXml = Object.keys(inputs)
      .filter((key) => key.startsWith("item-") && inputs[key] && inputs[`quantity-${key.split("-")[1]}`])
      .map((key) => {
        const index = key.split("-")[1];
        const post = parsedData.ProsjektNS.Poster.Post[index];
        return `
          <Item>
            <Quantity>${inputs[`quantity-${index}`]}</Quantity>
            <ItemId>${inputs[key]}</ItemId>
            <GoodsMark>${post.Postnr}</GoodsMark>
          </Item>
        `;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="iso-8859-1"?>
<OrderLinesImport>
  <Version>1.0</Version>
  <Filetype>Excel</Filetype>
  <Items>${itemsXml}</Items>
</OrderLinesImport>`;

    const blob = new Blob([xml], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "exported_data.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={4} align="stretch" mt={10}>
        <Image src="/lindab.png" alt="Lindab Logo" boxSize="160px" objectFit="contain" alignSelf="flex-start" className="no-print" />
        <Button
          onClick={() => {
            sessionStorage.removeItem("auth");
            navigate("/login");
          }}
          colorScheme="red"
        >
          Logout
        </Button>
        <Heading as="h1" size="xl">
          Lindab programanbud hjelper (NS3459)
        </Heading>
        <Text>Last opp din NS3459 XML-fil for å se prisdetaljer.</Text>
        <Input type="file" accept=".xml" onChange={handleFileChange} />
        <Button onClick={exportToXML} colorScheme="blue">
          Export to XML
        </Button>
        {parsedData && (
          <VStack align="stretch" mt={4}>
            <Text fontWeight="bold">Generell Informasjon:</Text>
            <Text>Dato: {parsedData.Generelt.Dato}</Text>
            <Text>Avsender: {parsedData.Generelt.Avsender.Person.Navn}</Text>
            <Text>Firma: {parsedData.Generelt.Avsender.Firma.Navn}</Text>
            <Text>Program Navn: {parsedData.Generelt.ProgramNavn}</Text>
            <Text>Program Versjon: {parsedData.Generelt.ProgramVersjon}</Text>
          </VStack>
        )}
        {parsedData && <p>{parsedData.Generelt.ProgramNavn}</p>}
        {parsedData && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Postnr.</Th>
                <Th>Beskrivelse</Th>
                <Th>Mengderegel</Th>
                <Th>Enhet</Th>
                <Th>Mengde</Th>
                <Th>Item ID</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {parsedData.ProsjektNS?.Poster?.Post.map((post, index) => [
                <Tr key={`data-${index}`}>
                  <Td>{post.Postnr}</Td>
                  <Td>{post.Tekst?.Uformatert}</Td>
                  <Td>{post.Prisinfo?.Mengderegel}</Td>
                  <Td>{post.Prisinfo?.Enhet}</Td>
                  <Td>{post.Prisinfo?.Mengde}</Td>
                </Tr>,
                <Tr key={`input-${index}`} bg={index % 2 === 0 ? "gray.100" : "white"}>
                  <Td colSpan={5}>
                    <Input placeholder="Item ID" size="sm" value={inputs[`item-${index}`] || ""} onChange={(e) => setInputs({ ...inputs, [`item-${index}`]: e.target.value })} />
                  </Td>
                  <Td colSpan={2}>
                    <Input placeholder="Quantity" size="sm" type="number" value={inputs[`quantity-${index}`] || ""} onChange={(e) => setInputs({ ...inputs, [`quantity-${index}`]: e.target.value })} />
                  </Td>
                </Tr>,
              ])}
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

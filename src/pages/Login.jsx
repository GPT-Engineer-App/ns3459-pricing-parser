import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, VStack, Container } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mbylgzmqqwiizncgaxla.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieWxnem1xcXdpaXpuY2dheGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMjcxNzksImV4cCI6MjAyOTgwMzE3OX0.OPRGlm-mOu1tmEzeXAOsBxjuKAYvesy1ha3C1_3ckuw";
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (user) navigate("/");
    if (error) alert(error.message);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} align="stretch" mt={10}>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;

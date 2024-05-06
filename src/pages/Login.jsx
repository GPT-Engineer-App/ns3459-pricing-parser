import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://mbylgzmqqwiizncgaxla.supabase.co/auth/v1/token?grant_type=password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieWxnem1xcXdpaXpuY2dheGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMjcxNzksImV4cCI6MjAyOTgwMzE3OX0.OPRGlm-mOu1tmEzeXAOsBxjuKAYvesy1ha3C1_3ckuw",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem('auth_token', data.access_token);
        navigate('/');
      } else {
        throw new Error(data.error_description || 'Failed to login');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p={4}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl isRequired mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button mt={4} colorScheme="blue" onClick={handleLogin}>Login</Button>
      {error && <Text color="red.500" mt={2}>{error}</Text>}
    </Box>
  );
}

export default Login;
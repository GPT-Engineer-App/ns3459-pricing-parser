import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('auth_token');
    if (!authToken) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

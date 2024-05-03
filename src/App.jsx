import { Route, BrowserRouter as Router, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Login from "./pages/Login.jsx";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mbylgzmqqwiizncgaxla.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieWxnem1xcXdpaXpuY2dheGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMjcxNzksImV4cCI6MjAyOTgwMzE3OX0.OPRGlm-mOu1tmEzeXAOsBxjuKAYvesy1ha3C1_3ckuw";
const supabase = createClient(supabaseUrl, supabaseKey);

function ProtectedRoute({ children }) {
  const location = useLocation();
  const session = supabase.auth.session();

  return session ? children : <Navigate to="/login" state={{ from: location }} replace />;
}
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Button
        colorScheme="blue"
        onClick={() => {
          supabase.auth.signOut();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Router>
  );
}

export default App;

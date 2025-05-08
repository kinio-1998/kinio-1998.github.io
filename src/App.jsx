import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin"; // nuevo
import ProtectedRoute from "./components/ProtectedRoute"; // nuevo

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Ruta protegida */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

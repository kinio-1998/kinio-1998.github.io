// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = "kiniorap1998"; // cámbialo

    if (password === correctPassword) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Acceso al Panel</h2>
        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

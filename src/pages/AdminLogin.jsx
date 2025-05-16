// src/components/AdminLoginModal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-portfolio-beta-three.vercel.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("admin-auth", "true");
        navigate("/admin");
        onClose();
      } else {
        alert("Contraseña incorrecta");
      }
    } catch (err) {
      console.error("Error en login:", err);
      alert("Hubo un error al iniciar sesión");
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <form
        onClick={handleModalContentClick}
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Acceso al Panel</h2>
        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full mb-2"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-red-500 underline text-center w-full"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default AdminLoginModal;

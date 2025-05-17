import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguajeContent";

export const ModalAdminLogin = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { language } = useLanguage();
  let labelForm = {};
  console.log(language)
  language === "es"
    ? (labelForm = {
        title: "Acceso al Panel de Administrador",
        placeHolder: "Escribe la Contraseña de Admin",
        lblButton: "Enviar",
        cancel: "Cancelar",
      })
    : (labelForm = {
        title: "Admin Panel Access",
        placeHolder: "Type Admin Password",
        lblButton: "Send",
        cancel: "Cancel",
      });
  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://backend-portfolio-beta-three.vercel.app/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("admin-auth", "true");
        onClose(); // cerrar modal
        navigate("/admin"); // redirigir al panel
      } else {
        alert("❌ Contraseña incorrecta");
        setPassword(""); // limpiar input
      }
    } catch (err) {
      console.error("Error en login:", err);
      alert("Hubo un error al iniciar sesión");
    }
  };

  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <form
        onClick={handleModalContentClick}
        onSubmit={handleLogin}
        className="bg-neutral-950 p-6 rounded shadow-md w-80 flex flex-col space-y-4  border border-green-600 "
      >
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6 border-b-green-600 border-b-4">
          {labelForm.title}
        </h2>
        <input
          type="password"
          className="p-3 rounded-md border border-green-600 bg-green-950/90 dark:text-white placeholder:italic placeholder:text-green-700  focus:border-2 focus:border-green-400 focus:outline-none"
          placeholder={labelForm.placeHolder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-200 disabled:opacity-50"
        >
          {labelForm.lblButton}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-red-500 underline text-center w-full"
        >
          {labelForm.cancel}
        </button>
      </form>
    </div>
  );
};

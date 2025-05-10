import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [total, setTotal] = useState(null);
  const [visitors, setVisitors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const visitsRes = await fetch(
          "https://backend-portfolio-beta-three.vercel.app/api/visits"
        );
        const visitsData = await visitsRes.json();
        setTotal(visitsData.visits || 0);
      } catch (err) {
        console.error("Error en visits:", err);
      }

      try {
        const visitorsRes = await fetch(
          "https://backend-portfolio-beta-three.vercel.app/api/visitors"
        );
        const visitorsData = await visitorsRes.json();
        setVisitors(visitorsData.visitors || []);
      } catch (err) {
        console.error("Error en visitors:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🔐 Panel de Administración</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Total de visitas únicas:</h2>
        <p className="text-green-400 text-2xl mt-2">
          {total !== null ? total : "Cargando..."}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Listado de visitantes:</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
            <thead className="bg-gray-700 text-sm text-left uppercase">
              <tr>
                <th className="px-4 py-2">IP</th>
                <th className="px-4 py-2">Fingerprint</th>
                <th className="px-4 py-2">Ubicación</th>
                <th className="px-4 py-2">Visitas</th>
                <th className="px-4 py-2">Primera visita</th>
                <th className="px-4 py-2">Última visita</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {visitors.map((visitor) => (
                <tr key={visitor.id} className="border-t border-gray-600">
                <td className="px-4 py-2">{visitor.ip}</td>
                <td className="px-4 py-2 truncate max-w-[120px]">{visitor.fingerprint}</td>
                <td className="px-4 py-2">{visitor.ubicacion || "-"}</td>
                <td className="px-4 py-2">{visitor.visitas}</td>
                <td className="px-4 py-2">
                  {visitor.timestamp
                    ? new Date(visitor.timestamp._seconds * 1000).toLocaleString()
                    : "-"}
                </td>
                <td className="px-4 py-2">
                  {visitor.ultimoIngreso
                    ? new Date(visitor.ultimoIngreso._seconds * 1000).toLocaleString()
                    : "-"}
                </td>
              </tr>
              ))}
              {visitors.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-400">
                    No hay registros de visitas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-10"
        >
          ← Volver al sitio
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;

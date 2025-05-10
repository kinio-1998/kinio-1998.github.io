import { useEffect, useState } from "react";
import getFingerprint from "../utils/getFingerprint";
import getIp from "../utils/getIp"; // Asegúrate de tener este archivo

export const Counter = ({ lblCounter }) => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
   console.log("Tracking visit...")
    const trackVisit = async () => {
      const fingerprint = await getFingerprint();
      const ip = await getIp(); // <-- Obtener la IP

      try {
      await fetch("https://backend-portfolio-beta-three.vercel.app/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint, ip }),
      });

      const res = await fetch("https://backend-portfolio-beta-three.vercel.app/api/visits");
      const data = await res.json();
      setVisits(data.visits);
    } catch (err) {
      console.error("Error al contar visitas:", err);
    }
    };

    trackVisit();
  }, []);

  return (
    <div className="text-center text-sm text-green-600 mt-6">
      {visits !== null ? `${lblCounter} ${visits}` : "Cargando visitas..."}
    </div>
  );
};

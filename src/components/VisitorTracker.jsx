import { useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // 1. Obtener fingerprint
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const fingerprint = result.visitorId;

        // 2. Obtener IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        // 3. Enviar a backend
        await fetch("https://backend-portfolio-beta-three.vercel.app/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, fingerprint }),
        });
      } catch (error) {
        console.error("Error al registrar visita:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;

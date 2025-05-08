import { useEffect } from "react";
import { getDoc, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import db from "../firebase.config";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { sendTelegramNotification } from "../utils/sendTelegramNotification";

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // 1. Fingerprint único del visitante
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const fingerprint = result.visitorId;

        // 2. Obtener IP pública
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        // 3. ID único para visitas
        const docId = `${ip}_${fingerprint}`;
        const visitRef = doc(db, "visitas", docId);
        const visitSnap = await getDoc(visitRef);

        if (visitSnap.exists()) {
          // Ya existe: actualizar fecha y contador individual
          await updateDoc(visitRef, {
            visitas: increment(1),
            ultimoIngreso: new Date(),
          });
        } else {
          // NUEVA VISITA
          await setDoc(visitRef, {
            ip,
            fingerprint,
            timestamp: new Date(),
            visitas: 1,
          });

          // 4. Incrementar contador global
          const contadorRef = doc(db, "contador", "visitas");
          const contadorSnap = await getDoc(contadorRef);

          if (contadorSnap.exists()) {
            await updateDoc(contadorRef, {
              cantidad: increment(1),
            });
          } else {
            // Inicializar contador si no existe
            await setDoc(contadorRef, { cantidad: 1 });
          }

          // 5. Notificación Telegram
          await sendTelegramNotification(ip, fingerprint);
        }
      } catch (error) {
        console.error("Error al registrar visita:", error);
      }
    };

    trackVisitor();
  }, []);

  return null; // No renderiza nada visible
};

export default VisitorTracker;

import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import db from "../firebase.config";

export const Counter = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const contarVisitas = async () => {
      const docRef = doc(db, "contador", "visitas");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          cantidad: 0//increment(1),
        });
        setVisits(docSnap.data().cantidad);
      } else {
        await setDoc(docRef, { cantidad: 1 });
        setVisits(1);
      }
    };

    contarVisitas();
  }, []);

  return (
    <div className="text-center text-sm text-green-600 mt-6">
      {visits !== null ? `Visitas: ${visits}` : "Cargando visitas..."}
    </div>
  );
}

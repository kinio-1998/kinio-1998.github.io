import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase.config";

export const Counter = ({lblCounter}) => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const fetchVisits = async () => {
      const docRef = doc(db, "contador", "visitas");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setVisits(docSnap.data().cantidad);
      }
    };

    fetchVisits();
  }, []);

  return (
    <div className="text-center text-sm text-green-600 mt-6">
      {visits !== null ? `${lblCounter} ${visits}` : "Cargando visitas..."}
    </div>
  );
};

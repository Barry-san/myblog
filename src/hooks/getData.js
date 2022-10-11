import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebaseConfig";

const useData = (id) => {
  const [docu, setDocu] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");
  async function getblog() {
    const data = await getDoc(doc(db, "blogs", id));
    return data;
  }
  try {
    setDocu(getblog());
    console.log(docu);
    setPending(false);
  } catch (error) {
    setError(error);
    setPending(false);
  }
  return { docu, pending, error };
};

export default useData;

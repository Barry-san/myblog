import { getDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebaseConfig";

const useData = (id) => {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  async function fetcher() {
    const blog = await getDoc(
      collection(db, "blogs", id)
        .then((res) => {
          setData(res);
          setPending(false);
        })
        .catch(() => {
          setError(true);
        })
    );
  }
  //   setData(fetcher());
  return { data, error, pending };
};

export default useData;

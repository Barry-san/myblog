import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const UseFetch = () => {
  const [isPending, setPending] = useState(true);
  const [data, setData] = useState([]);
  const [Error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      const blogs = await getDocs(collection(db, "blogs"));
      setData(blogs.docs.map((blog) => ({ ...blog.data(), id: blog.id })));
      setPending(false);
    }
    getData().catch((err) => setError(err));
  }, []);
  return { isPending, data, Error };
};

export default UseFetch;

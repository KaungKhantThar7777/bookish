import axios from "axios";
import { useEffect, useState } from "react";

export const useRemoteService = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(url);
  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [url]);

  return { data, error, loading, setUrl };
};

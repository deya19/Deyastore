import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

//url: is the end point
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    Error,
  };
};

export default useFetch;

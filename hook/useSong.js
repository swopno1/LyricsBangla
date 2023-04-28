import { useState, useEffect } from "react";
import axios from "axios";

const useSong = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const option = {
    method: "GET",
    url: `http://localhost:4001/${endpoint}`,
    headers: { "content-type": "application/json" },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(option);

      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useSong;

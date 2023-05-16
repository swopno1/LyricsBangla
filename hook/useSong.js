import { useState, useEffect } from "react";
import axios from "axios";

const useSong = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiRoot = "https://lyrics-api-orpin.vercel.app"; //"http://localhost:4001"

  const options = {
    method: "GET",
    url: `${apiRoot}${endpoint}`,
    headers: {
      "content-type": "application/json",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useSong;

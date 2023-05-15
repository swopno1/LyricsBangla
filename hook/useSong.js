import { useState, useEffect } from "react";
import axios from "axios";

const useSong = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiRoot = "http://localhost:4001"; //https://lyrics-api-orpin.vercel.app

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

      await setData(response.data);
      await setIsLoading(false);
    } catch (error) {
      await setError(error);
      await console.log(error);
    } finally {
      await setIsLoading(false);
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

import { useState, useEffect } from "react";
import axios from "axios";

const useSong = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://lyrics-api-orpin.vercel.app/${endpoint}`,
    headers: {
      "content-type": "application/json",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    // axios
    //   .get(`https://lyrics-api-orpin.vercel.app/${endpoint}`, options)
    //   .then((res) => {
    //     setData(res);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
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

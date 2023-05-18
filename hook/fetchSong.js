import { useState, useEffect } from "react";
import axios from "axios";

const fetchSong = (endpoint) => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: `https://lyrics-api-orpin.vercel.app/songs`,
    headers: {
      "content-type": "application/json",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);

      setData(response.data);
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      console.log("fetchSong called");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default fetchSong;

// This file is not using

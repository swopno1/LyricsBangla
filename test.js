const axios = require("axios");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const fetchData = async () => {
  axios
    .get("http://localhost:4001/alldata", options)
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Complete");
    });
};

fetchData();

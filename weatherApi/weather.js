const axios = require("axios");
const config = require("../config");

const get = (lat, lng) => {
  axios
    .get(`https://api.darksky.net/forecast/${config.darkSky}/${lat},${lng}`)
    .then((res, req) => {
      console.log(res.data.currently);
      return res.data.currently;
    })
    .catch(err => {
      console.log(`${err.response.status}`);
      return err.response.status;
    });
};

module.exports = { get };

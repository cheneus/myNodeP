const axios = require("axios");
const config = require("../config");
const weather = require("./weather");

const get = address => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=
      ${address}
      &key=${config.gMapKey}`
    )
    .then((res, req) => {
      if (res.data.status !== "ZERO_RESULTS") {
        console.log(`----------------`);
        console.log(res.data.results[0].formatted_address);
        console.log(`----------------`);
        const lat = res.data.results[0].geometry.location.lat;
        const lng = res.data.results[0].geometry.location.lng;
        const geo = { lat, lng };
        console.log(`lat: ${res.data.results[0].geometry.location.lat}`);
        console.log(`lng: ${res.data.results[0].geometry.location.lng}`);
        weather.get(lat, lng);
      } else {
        console.log(`no result for this address: ${address}`);
      }
    })
    .catch(err => console.log(err));
};

module.exports = { get };

const axios = require("axios");
const yargs = require("yargs");
const config = require("../config");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "address to get weather info",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const encodedAddress = encodeURIComponent(argv.a);

axios
  .get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=
    ${argv.a}
    &key=${config.gMapKey}`
  )
  .then((res, req) => {
    console.log(res.data.results[0].address_components);
    console.log(`----------------`);
    console.log(res.data.results[0].formatted_address);
    console.log(`----------------`);
    console.log(res.data.results[0].geometry);
  });

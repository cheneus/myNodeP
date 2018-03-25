const yargs = require("yargs");
const geocode = require("./geocode");

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

geocode.get(argv.address);
// geocode.get(argv.address);

const download = require("./lib/download")
const parseJson = require("./lib/jsonParser").parseJSON;

const argv = require("yargs")
  .usage("Usage: $0 <command> [url, path]")
  .command("download", "Download the specified torrent", (yargs) => {
    return yargs.option(
      {
        "magnet": {
          alias: "m",
          type: "string",
          describe: "magnet uri to download",
          demandOption: true
        },
        "path": {
          alias: "p",
          type: "string",
          describe: "Path of the folder downloaded file",
          demandOption: true
        }
      })
  }, (argv) => {
    download(argv.magnet, argv.path);
  })
  .argv;
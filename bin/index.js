#! /usr/bin/env node
const yargs = require("yargs");

const usage =
  "\nThe nodewc utility displays the number of lines, words, and bytes contained in each input file, or standard input (if no file is specified) to the standard output.";

const options = yargs
  .usage(usage)
  .option("c", {
    describe: "The number of bytes in each input file.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

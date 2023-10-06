#! /usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "node:fs/promises";

const requireFile = async (path) => {
  const data = await readFile(path);
  return data.length;
};

const usage =
  "\nThe nodewc utility displays the number of lines, words, and bytes contained in each input file, or standard input (if no file is specified) to the standard output.";

const options = yargs(hideBin(process.argv))
  .usage(usage)
  .option("c", {
    describe: "The number of bytes in each input file.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

if (options.c) {
  try {
    const filePaths = options._;
    const filePromises = filePaths.map((file) => requireFile(file));
    const charCounts = await Promise.all(filePromises);

    charCounts.forEach((count, index) => {
      console.log(count, filePaths[index]);
    });
  } catch (e) {
    console.error(e.message);
  }
}

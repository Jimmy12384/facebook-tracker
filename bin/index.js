#! /usr/bin/env node

const yargs = require("yargs");

const usage = "\nUsage: fbtrack <user_url> facebook user's profile URL.";
const options = yargs.usage(usage).help(true).argv;

const userUrl = options._[0];
if(userUrl)
const fs = require("fs");

fs.writeFileSync("second.txt", "");
fs.writeFileSync("second.txt", "I like Node JS");

const dateToAdd = fs.readFileSync("first.txt", "utf-8");
fs.appendFileSync("second.txt", "\n" + dateToAdd);

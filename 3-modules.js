const names = require("./4-names.js");
const sayHi = require("./3-utils.js");
const data = require("./5-alternative-flavour.js");
// following module is run just by requiring:
require("./6-mind-grenade.js");

//console.log(names);

// modules:
// 1. os, 2. path, 3.

sayHi(names.john);
sayHi(names.peter);
sayHi("susan");

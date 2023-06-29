//npm -- global command, comes with nodejs
// > npm --version : checks the version of npm installed in your machine

// local dependency: use it only in this particular project
// > npm i <package name>

// global dependency: use it in any project
// > npm install -g <package name>
// > sudo npm  install -g <package name> //mac

// package.json -- manifest file (holds important information about our project/package)
// manual approach: create package.json in the root, create properties etc
// > npm init: step by step, press enter to skip
// > npm init -y: to store everything in its default condition

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItem = _.flattenDeep(items);
console.log(newItem);

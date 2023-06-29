const path = require("path");

// to check path separator:
console.log(path.sep);

// to join file paths: (test.txt) (note: its a relative filepath)
const filePath = path.join("/contents", "subfolder", "test.txt");
console.log(filePath);

// to get just file name:
const baseFileName = path.basename(filePath);
console.log(baseFileName);

// to get an absolute filepath use path.resolve:
const absolute = path.resolve(__dirname, "contents", "subfolder", "test.txt");
console.log(absolute);

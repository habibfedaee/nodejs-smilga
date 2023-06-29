// file system module:

const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./contents/first.txt', 'utf8');
const second = readFileSync('./contents/second.txt', 'utf8');

//console.log(first, "\n", second); 

writeFileSync('./contents/result-sync.txt', `here are the results: ${first}, ${second},\n `, {flag:'a'});
console.log('done with this task');
console.log('starting the next task ');


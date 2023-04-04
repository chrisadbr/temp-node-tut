// console.log(__dirname);
// setInterval(() => {
//   console.log("Hello world");
// }, 1000);
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative_flavor");
require("./7-mine-grenade");
sayHi(john);
sayHi(peter);

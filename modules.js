// node has global object global not window

console.log("hi");
var a = 1;
console.log(a); 

var m2 = require('./module2');
console.log(m2);
m2();
/*
console.log(m2.b);
console.log(m2.f());
*/

const _ = require('underscore');
const arr = _.range(1,11);
console.log(arr);

const http = require('http');
const server = http.createServer( (req, res) => {

console.log('I got a request!');
res.write('Hi is the responde');
res.end();
});

server.listen(3000);

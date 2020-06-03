var a = "Hello from module2!";

module.exports.a = a;
module.exports.b = 2;
exports.c = "shorthand";
module.exports.f = function () {
    console.log("export function");
};


module.exports = function () {
    console.log("overwrite entire exports");
};


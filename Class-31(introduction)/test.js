//!how to import inbuild function  from other file

const calc = require('./calculator.js')
const out = require('../../javascript/hitesh/p.js');

out.sub(2,3);


calc.multiplication(2,3);
calc.addition(2,3);
calc.division(2,3);
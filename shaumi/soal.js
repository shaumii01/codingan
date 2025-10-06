// const {kurang} = require('./fungsii/pengurangan.js')
// const {tambah} = require('./fungsii/pertambahan.js')

// tambah(20,5)
// kurang(15,3)

// var colors = require('colors');
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// var figlet = require("figlet");
// var colors = require("colors");

// figlet(", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data.green.bgBrightYellow);
// });

const cowsay = require("cowsay");
var colors = require("colors");

console.log(cowsay.say({
    text : "HELLAAWRR",
    e : "><",
    T : "U "
}).rainbow);



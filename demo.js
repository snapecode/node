// //Random Number generator using lodash
//
// var _ = require('lodash')
//
// console.log(_.random(1,10054))


var fs = require('fs');


// access the file system with read file, used utf-8 to specify data

fs.readFile('./data.json', 'utf-8',(err,data) => {

    console.log(data);

})

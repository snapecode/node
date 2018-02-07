// //Random Number generator using lodash
//
// var _ = require('lodash')
//
// console.log(_.random(1,10054))


// var fs = require('fs');
//
// var data = require('./data.json')
//
// console.log(data.name)
// // access the file system with read file, used utf-8 to specify data
// //the above sees the data call as an object, so name property can be accessed
// //below data is parsed through JSON before its name property can ne accessed
//
// fs.readFile('./data.json', 'utf-8',(err,data) => {
//         var data = JSON.parse(data)
//     console.log(data.name)
//
// })



//
// //reading directories
// var fs = require('fs')
//
// fs.readdir('./usr/lcl/bin/node', (err, data) => {
//
//     console.log(data)
//
// })




// //writing files
// //writeFile method requires 3rd (err) perameter or else deprecation error
// var fs = require('fs')
//
// var data = {
//     name: 'Bob Barker',
//     date: 'Whenever',
//     issue: 'I\'m the next contestant on the price is write'
//
//
//
// }
//
// fs.writeFile('data1.json', JSON.stringify(data), (err)=>{
//
//     console.log('file creation complete')
// })
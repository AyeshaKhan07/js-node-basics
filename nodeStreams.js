const fs = require('fs');
const Writable = require('stream');

// Reading stream
 
// const stream = fs.createReadStream(
//   './file.txt',
//   {
//     encoding: 'utf-8'
//   }
// );
 
// stream.on('data', (chunk) => {
//   console.log('New chunk of data:', chunk);
// })

// Writing stream
// const stream = fs.createWriteStream('./file.txt');
 
// stream.write('This is the new file created', () => {
//   console.log('File created!');
// });

/* 
finish event of write stream fires when you call stream.end()
===============================================================
*/

// stream.on('finish', () => {
//     console.log('All the data is transmitted');
// });

// for(let i=0; i<1000; i++)
// {
//     stream.write(`This is the line: ${i+1}\n`);
// }

// stream.end();

/* 
Reading from one file and writing to other
==========================================
*/
// const readStream = fs.createReadStream("./file.txt", {encoding: 'utf-8'});
// const writeStream = fs.createWriteStream("./newFile.txt");

// writeStream.on('finish', () => {console.log("All data transferred")})

// readStream.on('data', chunk => {
//   writeStream.write(chunk)
// });

// readStream.on('end', () => {
//     writeStream.end(); // Close the write stream when the read stream has finished reading
// });

/* 
Using Pipes to write the readable stream
========================================
*/

// const readable = fs.createReadStream('./file.txt');
// const writable = fs.createWriteStream('./newFile.txt');
 
// writable.on('finish', () => {
//   console.log('All data transferred');
// });
 
// readable.pipe(writable);

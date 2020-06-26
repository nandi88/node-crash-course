const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/writeStream.txt');


//eventlistener
//data gets a chuck of data and every time you get a chunk the chunk callback fires
// readStream.on('data', (chunk) => {
//     console.log('--------New chunk---------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);

// });

readStream.pipe(writeStream);
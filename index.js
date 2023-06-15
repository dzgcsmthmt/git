const zlib = require('zlib');  
const fs = require('fs');
const crypto = require('crypto');
const shasum = crypto.createHash('sha1')
const content = fs.readFileSync('./1.txt',{encoding:'utf8'});

//how sha1 be generated
shasum.update(`blob ${content.length}\0${content}`);
const sha1 = shasum.digest('hex');
console.log(sha1)

const inputFile = fs.readFileSync(`./\.git/objects/${sha1.slice(0,2)}/${sha1.slice(2)}`);  
zlib.unzip(inputFile,(err,buffer) => {
    console.log(buffer.toString('utf8'));
})
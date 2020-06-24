const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// console.log('last line'); 

// //writing files

fs.writeFile('./docs/blog1.txt', 'Hello mama and rien', () => {
    console.log('file written');
});

fs.writeFile('./docs/delete.txt', 'I must get deleted', () => {
    console.log('file written');
});

//directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}



//deleting files

if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
// Get arguments and it ckecks more than 2 because the first it is an aplication and second an extension (example.js)
if (process.argv.length > 2) {
// To remove first 2 arguments because I need just extensions txt, js, etc.
    var exts = process.argv.slice(2, process.argv.length);
// It provides you interact to files and directories 
    const fs = require('fs');
//It gets function to read the directory 
//process.cwd current location 
//variables:
//err, it gives a message about issues reading the folder 
//data, is an array of folders and files in the directory 
    fs.readdir(process.cwd(), (err, data) => {
// stopping to read a folder because it has issues 
        if (err) {
            console.log(err);
            return;
        }
//to interate data in order to analyze each file / folder 
        data.forEach((file) => {
//to interate exts in order to analyze each extension 
            exts.forEach((val) => {

			// It is filtering files by extension 
                if (file.includes('.' + val)) {
// print file 
                    console.log(file);
                }
            });

        });

    });
} else {
    console.log('no extensions');
}

//Sayak Ghosh- 01/02/2024
//Day One, Problem 1- 
const fs = require('fs') // import the fs module
function readFileContent(filePath){
    fs.readFile(filePath, 'utf8', (err, data)=>{ //utf8 used to encode / decode
        if(err){
            console.log(`Error reading file: ${err.message}`);
        }
        else{
            console.log(`file content:\n${data}`);
        }        
    })
}
// check the test cases - 
readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt
readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)
readFileContent('test-files/nonexistet-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...


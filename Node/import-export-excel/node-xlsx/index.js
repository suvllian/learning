const xlsx = require('node-xlsx')
const fs = require('fs')

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/index.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/index.xlsx`);

console.log(workSheetsFromBuffer)
console.log(workSheetsFromFile)

const data = [
  [1, 2, 3], 
  [true, false, null, 'sheetjs'], 
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
  ['baz', null, 'qux']
]

// Returns a buffer
const buffer = xlsx.build([{name: "mySheetName", data: data}]); 

console.log(buffer)

fs.writeFile("test.xlsx", buffer,  "binary",function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
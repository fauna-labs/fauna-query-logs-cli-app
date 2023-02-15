const readline = require('readline');
const fs = require('fs');

// replace the path with the path to your JSONL file
const pathToJsonlFile = 'input.jsonl';

const readInterface = readline.createInterface({
  input: fs.createReadStream(pathToJsonlFile),
  output: process.stdout,
  console: false
});

const jsonOutput = [];

readInterface.on('line', function(line) {
  const json = JSON.parse(line);
  jsonOutput.push(json);
});

readInterface.on('close', function() {
  const jsonData = JSON.stringify(jsonOutput);
  fs.writeFile('./output.json', jsonData, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Output saved to ${jsonOutput}`);
    }
  });
  console.log(jsonOutput);
});

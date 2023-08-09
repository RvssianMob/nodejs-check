//3. file-system.js

const fs = require('fs');

// writting to file 
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

//reading from previously created 'welcome.txt' file  

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

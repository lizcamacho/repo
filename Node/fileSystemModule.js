const fs = require('fs');

fs.writeFile('./message.txt', 'data created into', function (err) {
    if (err) throw err;
    console.log('The file has been saved!');
});


fs.readFile('./message.txt', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
  });
  console.log('Last line');
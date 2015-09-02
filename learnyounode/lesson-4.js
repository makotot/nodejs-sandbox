var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function (err, data) {
  console.log(data.toString().split('\n').length -1);
});


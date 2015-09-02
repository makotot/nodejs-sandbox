var fs = require('fs'),
  path = require('path');

fs.readdir(process.argv[2], function (err, items) {
  items.forEach(function (item) {
    if (path.extname(item) === ('.' + process.argv[3])) {
      console.log(item);
    }
  });
});

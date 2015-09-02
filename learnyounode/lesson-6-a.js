var fs = require('fs'),
  path = require('path');

module.exports = function (dirname, extname, cb) {

  fs.readdir(dirname, function (err, items) {
    if (err) {
      return cb(err);
    }

    var data = [];

    items.forEach(function (item) {
      if (path.extname(item) === ('.' + extname)) {
        data.push(item);
      }
    });

    cb(null, data);
  });

};

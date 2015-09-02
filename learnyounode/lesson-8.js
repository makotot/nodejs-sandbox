var http = require('http'),
  bl = require('bl');

http.get(process.argv[2], function (response) {

  response.pipe(bl(function (err, data) {
    if (err) {
      console.error(err);
    }

    var result = data.toString();

    console.log(result.length);
    console.log(result);
  }));
});

var http = require('http'),
  argv = process.argv.slice(2);

function get () {
}

for (var i = 0; i < argv.length; i++) {

  http.get(argv[i], function (response) {
    response.setEncoding('utf8');

    var total = '';

    response
      .on('data', function (data) {
        total += data;
      })
      .on('end', function (data) {
        console.log(total)
      });
  });
}

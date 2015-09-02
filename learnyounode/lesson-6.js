var lesson6a = require('./lesson-6-a');

lesson6a(process.argv[2], process.argv[3], function (err, res) {
  if (err) {
    console.error(err);
  }

  res.forEach(function (data) {
    console.log(data);
  });
});

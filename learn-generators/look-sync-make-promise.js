function askFoo () {
  return new Promise(function () {
  });
}

function run (generator) {
}

run(function * () {
  var foo = yield askFoo();

  console.log(foo);
});


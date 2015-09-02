function * factorial (n) {
  var x = 1;

  for (var i = 1; i <= n; i++) {
    x *= i;
    yield x;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}

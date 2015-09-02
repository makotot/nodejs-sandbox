var total = 0;

process.argv.forEach(function (arg) {
  total += +arg ? +arg : 0;
});

console.log(total);

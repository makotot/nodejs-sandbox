function * upper (items) {
  for (item of items) {
    try {
      var str = item.toUpperCase();
      yield str;
    } catch (e) {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}

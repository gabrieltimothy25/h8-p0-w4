function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var results = [];
    for (var i = 1; i <= angka; i++ ) {
        var temp = '';
        if (angka % i === 0) {
            temp += i;
            temp += (angka/i);
            results.push(temp);
        }
    } 
    var least = results[0].length;
    for (var i=1; i < results.length; i++) {
        if (results[i].length < least) {
            least = results[i].length;
        }
    } return least;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
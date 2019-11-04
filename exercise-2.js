function fpb(angka1, angka2) {
    // you can only write your code here!
    var arr1 = []; // faktor2 angka pertama
    var arr2 = []; // faktor2 angka kedua
    // Angka Pertama
    let i = 1;
    while (i <= angka1){
        if (angka1 % i === 0) {
            arr1.push(i);
            i++
        } else {
            i++
        }
    }
    i = 1;
    while (i <= angka2){
        if (angka2 % i === 0) {
            arr2.push(i);
            i++;
        } else {
            i++;
        }
    }
    for (var x = arr1.length-1; x >= 0; x--) {
        for (var y = arr2.length-1; y >= 0; y--) {
            if (arr1[x] === arr2[y]) {
                return arr1[x];
            }
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
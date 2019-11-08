function urutkanAbjad(str) {
    // you can only write your code here!
    var result = ''
    var inputArr = str.split('');
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]];
            }
        }
    }
    for (var i = 0; i < inputArr.length; i++) {
        result += inputArr[i];
    }
    return result;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
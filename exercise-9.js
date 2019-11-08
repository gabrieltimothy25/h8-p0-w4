function checkAB(str) {
    // you can only write your code here!
    var newStr = '';
    var splitted = str.split('')
    var indexA = [];
    var indexB = [];
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i] != ' ') {
            newStr += splitted[i];
        }
    }
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'a') {
            indexA.push(i);
        } else if (newStr[i] === 'b') {
            indexB.push(i);
        }
    }
    for (var i = 0; i < indexA.length; i++) {
        for (var j = 0; j < indexB.length; j++) {
            if (Math.abs(indexA[i]-indexB[j]) === 3)
            return true;
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
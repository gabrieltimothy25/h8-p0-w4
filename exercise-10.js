function changeMe(arr) {
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++) {
        var result = {}
        result['firstName'] = arr[i][0];
        result['lastName'] = arr[i][1];
        result['gender'] = arr[i][2];
    
        if (arr[i][3] === undefined || arr[i][3] > 2019) {
            result['age'] = 'Invalid Birth Year'
        } else {
            result['age'] = 2019 - arr[i][3];
        }
        console.log(`${i+1}. ${result['firstName']} ${result['lastName']}: \n`, result)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
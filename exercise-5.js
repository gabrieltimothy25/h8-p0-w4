function ubahHuruf(kata) {
    // you can only write your code here!
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var arrKata = kata.split('');
    var newKata = '';
    for (var i = 0; i < arrKata.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (arrKata[i] === alphabet[j]) {
                newKata += alphabet[j+1];
            }
        }   
    } 
    return newKata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
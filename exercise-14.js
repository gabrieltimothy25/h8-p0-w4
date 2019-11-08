function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var dct = {};
        dct['penumpang'] = arrPenumpang[i][0];
        dct['naikDari'] = arrPenumpang[i][1];
        dct['tujuan'] = arrPenumpang[i][2];
        for (var j = 0; j < rute.length; j++) {
            if (dct['naikDari'] === rute[j]) {
                var indexMulai = j;
            } else if (dct['tujuan'] === rute[j]) {
                var indexSelesai = j;
            }
        }
        dct['bayar'] = (indexSelesai-indexMulai) * 2000;
        result.push(dct);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
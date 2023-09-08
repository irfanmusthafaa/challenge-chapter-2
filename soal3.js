const dataAngka = [1, 2, 3, 4, 6, 6];

const getAngkaTerbesarKedua = (dataNumbers) => {
  // Validasi Tipe Array dengan semua elemen array tipe data number
  if (Array.isArray(dataNumbers) === false) {
    return "Pastikan data yang dimasukkan berupa array dengan elemen tipe data number";
  } else if (!dataNumbers.every((value) => typeof value === "number")) {
    return "Pastikan tipe data pada elemen array harus berupa number";
  }

  //hapus duplikat data yang sama
  const dataAngkaFix = [...new Set(dataNumbers)];

  if (dataAngkaFix.length < 2) {
    return "Array setidaknya memiliki 2 elemen";
  }

  dataAngkaFix.sort(function (a, b) {
    return b - a;
  });

  return `Angka Terbesar Kedua adalah : ${dataAngkaFix[1]}`;
};

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0)); //akan memberikan validasi error karena data yang dimasukkan bukan berupa array
console.log(getAngkaTerbesarKedua()); //akan memberikan validasi error karena data yang dimasukkan bukan berupa array
console.log(getAngkaTerbesarKedua([])); //akan memberikan validasi Array setidaknya memiliki 2 elemen"

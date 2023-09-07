//total keuntungan

//total modal : hargaBeli * totalTerjual

//produk buku terlaris

//penulis buku terlaris

//presentase keuntungan : totalKeuntungan * 10%

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  let totalKeuntungan = 0;
  let totalModal = 0;

  dataPenjualan.map((value) => {
    //total keuntungan
    let keuntungan = (value.hargaJual - value.hargaBeli) * value.totalTerjual;
    totalKeuntungan += keuntungan;

    //modal
    modal = value.hargaBeli * value.totalTerjual;
    totalModal += modal;
  });

  //format rupiah
  const totalKeuntunganRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalKeuntungan);

  const totalModalRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalModal);

  //presentase keuntungan
  const hitungPresentase = (totalKeuntungan / totalModal) * 100;
  const presentaseKeuntungan = Math.round(hitungPresentase) + "%";

  //mencari total terjual terbanyak untuk menentukan produk terlaris dan penulis terlaris
  const produkTerlaris = dataPenjualan.reduce((nilaiPertama, nilaiSetelahnya) => {
    if (nilaiSetelahnya.totalTerjual > nilaiPertama.totalTerjual) {
      return nilaiSetelahnya;
    }
    return nilaiPertama;
  }, dataPenjualan[0]);

  return {
    totalKeuntungan: totalKeuntunganRupiah,
    totalModal: totalModalRupiah,
    presentaseKeuntungan,
    produkBukuTerlaris: produkTerlaris.namaProduk,
    penulisTerlaris: produkTerlaris.penulis,
  };
};

// getInfoPenjualan(dataPenjualanNovel);
console.log(getInfoPenjualan(dataPenjualanNovel));

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 0",
    hargaSatuan: 760808,
    kategori: "Sepatu Sport",
    totalTerjual: 98,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    hargaSatuan: 360808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 98,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 98,
  },
];

const getTotalPenjualan = (dataTerjual) => {
  let total = dataTerjual.reduce((val, element) => {
    return val + element.totalTerjual;
  }, 0);
  return `total terjual : ${total}`;
};

console.log(getTotalPenjualan(dataPenjualanPakAldi));

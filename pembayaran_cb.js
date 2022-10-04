// VOUCHER MENGGUNAKAN CALLBACK

/* 
    Homework Code Implementation Javascript

    Deni membeli makanan menggunakan aplikasi FazzFood. Dimana terdapat 2 buah kode promo :
    Promo ‘FAZZFOOD50’ dengan ketentuan pemesanan minimal 50rb akan 
    mendapatkan diskon 50%, dengan maksimal potongan sebesar 50rb.
    Promo ‘DITRAKTIR60’ dengan ketentuan pemesanan minimal 25rb akan 
    mendapatkan diskon 60% dengan maksimal potongan sebesar 30rb.
    Untuk pengiriman sejauh 2 km pertama akan dikenakan tarif 5rb, 
    dan setiap 1 km selanjutnya dikenakan penambahan 3rb. Untuk beberapa 
    restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

    Buatlah flowchart untuk membuat fungsi dari cerita diatas
    Buatlah sebuah function yang menerima 4 parameter FazzFood(harga, voucher, jarak, pajak) 

*/

// ============================================= //

const FazzFood = (harga, voucher, jarak, pajak) => {
  // Validasi
  if (typeof harga !== "number")
    return console.log("Input harga dengan number");
  if (typeof voucher !== "function" && voucher !== null)
    return console.log("Voucher Invalid");
  if (typeof jarak !== "number")
    return console.log("Input jarak dengan number");
  if (typeof pajak !== "boolean")
    return console.log("Input pajak dengan booelan true or false");

  // Function perhitungan pajak
  let potongpajak;
  if (pajak) {
    potongpajak = harga * 0.05;
  } else {
    potongpajak = 0;
  }

  // Perhitungan Jarak
  let ongkir;
  if (jarak <= 0) return console.log("Jarak harus lebih dari 0 km");
  if (jarak <= 2) ongkir = 5000;
  ongkir = (jarak - 2) * 3000 + 5000;

  // Jika tidak menggunakan voucher agar program tetap berjalan
  // const potonganVoucher = !voucher ? 0 : voucher(harga);
  let potonganVoucher;
  if (!voucher) potonganVoucher = 0;
  potonganVoucher = voucher(harga);



  console.log(`Harga : ${harga}`);
  console.log(`Potongan : ${potonganVoucher}`);
  console.log(`Biaya Antar : ${ongkir}`);
  console.log(`Pajak : ${potongpajak}`);

  let total = harga - potonganVoucher + ongkir + potongpajak;
  console.log(`Total Pembayaran : ${total}`);
};


// Callback voucher FAZZFOOD50
const FAZZFOOD50 = (harga) => {
  let maximal;
  if (harga < 50000)
    return "Voucher tidak dapat digunakan karena pembayaran kurang dari 50 Rb";
  maximal = harga * 0.5;
  if (maximal < 50000) return maximal;
  return 50000;
};

// Callback voucher DITRAKTIR60
const DITRAKTIR60 = (harga) => {
  let maximal;
  if (harga < 25000)
    return "Voucher tidak dapat digunakan karena pembayaran kurang dari 25 Rb";
  maximal = harga * 0.6;
  if (maximal < 30000) return maximal;
  return 30000;
};

FazzFood(75000, FAZZFOOD50, 5, true);
// FazzFood(75000, null, 5, true);
// FazzFood(75000, "FAZZFOOD50", 5, true);
// FazzFood(75000, 2, 5, true);

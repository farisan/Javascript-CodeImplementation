// VOUCHER MENGGUNAKAN PARAMETER STRING

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
        return ("Input harga dengan number");
    if (typeof voucher !== "string" && voucher !== null)
        return ("Voucher Invalid");
    if (typeof jarak !== "number")
        return ("Input jarak dengan number");
    if (typeof pajak !== "boolean")
        return ("Input pajak dengan booelan true or false");

    let diskon = 0;
    if (voucher == "") {
        diskon = 0;
    } else if (voucher == "FAZZFOOD50") {
        if (harga < 50000) return ("Voucher tidak dapat digunakan karena pembayaran kurang dari 50 Rb");
        diskon = harga * 0.5;
        if (diskon >= 50000) diskon = 50000;
    } else if (voucher == "DITRAKTIR60") {
        if (harga < 25000) return ("Voucher tidak dapat digunakan karena pembayaran kurang dari 25 Rb");
        diskon = harga * 0.6;
        if (diskon >= 30000) diskon = 30000;
    }

    // perhitungan pajak
    let potongpajak = 0;
    if (pajak) potongpajak = harga * 0.05;



    // Perhitungan Jarak
    let ongkir = 5000;
    let lebih2km = 3000;
    if (jarak <= 0) return console.log("Jarak harus lebih dari 0 km");
    if (jarak >= 2) ongkir = (jarak - 2) * lebih2km + 5000;


    let total = harga - diskon + ongkir + potongpajak;

    return `
    Harga               : ${harga}
    Potongan            : ${diskon}
    Biaya Antar         : ${ongkir}
    Pajak (5%)          : ${potongpajak}
    Total Pembayaran    : ${total}`;
};

console.log(FazzFood(75000, "FAZZFOOD50", 3, true));
// FazzFood(26000, "DITRAKTIR60", 5, true);
// FazzFood(75000, "", 5, true);

// VOUCHER MENGGUNAKAN PARAMETER STRING


const FazzFood = (harga, voucher, jarak, pajak) => {
    // Validasi
    if (typeof harga !== "number")
        return console.log("Input harga dengan number");
    if (typeof voucher !== "string" && voucher !== null)
        return console.log("Voucher Invalid");
    if (typeof jarak !== "number")
        return console.log("Input jarak dengan number");
    if (typeof pajak !== "boolean")
        return console.log("Input pajak dengan booelan true or false");

    let diskon = 0;
    if (voucher == "") {
        diskon = 0;
    } else if (voucher == "FAZZFOOD50") {
        if (harga < 50000) return console.log("Voucher tidak dapat digunakan karena pembayaran kurang dari 50 Rb");
        diskon = harga * 0.5;
        if (diskon >= 50000) diskon = 50000;
    } else if (voucher == "DITRAKTIR60") {
        if (harga < 25000) return console.log("Voucher tidak dapat digunakan karena pembayaran kurang dari 25 Rb");
        diskon = harga * 0.6;
        if (diskon >= 30000) diskon = 30000;
    }

    // perhitungan pajak
    let potongpajak = 0;
    if (pajak) potongpajak = harga * 0.05;


    // Perhitungan Jarak
    let ongkir;
    if (jarak <= 0) return console.log("Jarak harus lebih dari 0 km");
    if (jarak <= 2) ongkir = 5000;
    ongkir = (jarak - 2) * 3000 + 5000;


    let total = harga - diskon + ongkir + potongpajak;
    console.log(`Harga : ${harga}`);
    console.log(`Potongan : ${diskon}`);
    console.log(`Biaya Antar : ${ongkir}`);
    console.log(`Pajak : ${potongpajak}`);
    console.log(`Total Pembayaran : ${total}`);
};

FazzFood(75000, "FAZZFOOD50", 5, true);
// FazzFood(26000, "DITRAKTIR60", 5, true);
// FazzFood(75000, "", 5, true);

/* . 
    Homework CodeImplementation Javascript

    Buatlah Code untuk soal dibawah ini:

    Diberikan sebuah variabel yang berisikan bilangan integer dengan 
    ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu 
    bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan 
    berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan 
    akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function 
    yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.

    input:
    dividerSort(5956560159466056)

    output
    55566914566956
 */

// ========================================== //


function dividerSort(bilangan_deret) {
  return parseInt(bilangan_deret
    .toString()
    .split(0)
    .map((deret) => deret.split("").sort().join(""))
    .join(""));
}

console.log(dividerSort(5956560159466056));
console.log(typeof dividerSort(5956560159466056));


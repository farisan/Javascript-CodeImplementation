/* 
    Homework javascript Code Implementation

    Buatlah code dari tugas Computer Science dibawah ini (tanpa method built-in)
    Deteksi Palindrom
    Diberikan sebuah teks periksa apakah kata tersebut adalah palindrom atau bukan
    Example :

    Input : cekPalindrom(‘malam’) 
    Output : Palindrom

*/

// ======================================== //

const palindrome = (kata) => {
  // Validasi tipe data kata
  if (typeof kata !== "string") return "Input data harus string";

  let rev = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    rev += "" + kata[i];
  }

  if (rev !== kata) return `${kata} : Bukan Palindrome`;
  return `${kata} : adalah kata palindrome`;
};

console.log(palindrome("world"));
console.log(palindrome("malam"));

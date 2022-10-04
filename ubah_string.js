/* 
    Homework Javascript Code implementation

    Mengubah Huruf Konsonan Diberikan sebuah teks, ubah huruf 
    konsonan a menjadi o dari suatu teks. 
    Misalnya kalimat “Jakarta”, 
    output “Jokorto” 
    
    Example : 
    Input : changeText(‘Jakarta’)
    Output : Jokorto

*/

const changeText = (kota) => {
  // Validasi
  if (typeof kota !== "string") return "Input data harus string";

  let kata = "";
  for (let i = 0; i <= kota.length - 1; i++) {
    if (kota[i] == "a") kata += "o"; else
      kata += kota[i] + "";

  }
  return kata;
};

console.log(changeText("jakarta"));


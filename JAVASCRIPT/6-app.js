console.log("---------------- FONKSİYONLAR [ FUNCTİONS ]");

function konsolaYazdir() {
  console.log("Merhaba");
}
konsolaYazdir();

let sayac = 0;

function konsolaYaz() {
  sayac = sayac + 1;
  console.log("Sayfanın güncel değeri", sayac);
}
konsolaYaz();

//! PARAMETRE ATAMA

function sayaciGüncelle(yeniDeger) {
  sayac = yeniDeger;
  console.log("Sayfanın güncel değeri", sayac);
}
sayaciGüncelle(15);

//! ÖRNEK ÖDEV

let newNumber = [];
let x = 0;

function number() {
  while (x <= 5) {
    newNumber.push(x);
    x++;
  }
  console.log(newNumber);
}
number();

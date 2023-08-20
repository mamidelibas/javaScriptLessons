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

//! ----------- 
console.log("---------------- PARAMETRE ATAMA");

function sayaciGüncelle(yeniDeger) {
  sayac = yeniDeger;
  console.log("Sayfanın güncel değeri", sayac);
}
sayaciGüncelle(15);

let konsolYazisi="Selam!";
let konsolYazisi2="Merhaba!";
let konsolSayi;

function konsolaYazdir2(text1,text2,numb=20){
  console.log(text1,text2,numb)
}
konsolaYazdir2(konsolYazisi,konsolYazisi2,konsolSayi);

//! ----------- 
console.log("---------------- ARROW FUNCTİON");


const arrowFunc=(param1,param2)=>{
  console.log("ArrowFunc : ",param1+"  "+param2)
}
arrowFunc("İlk parametre","İkinci parametre")

//! ----------- 
console.log("---------------- SKOP VE RETURN : Değer döndürme");

function sayilariCarp(num1,num2){
  const carpimSonucu=num1*num2
  console.log("Çarpma sonucu :",carpimSonucu)
}
sayilariCarp(10,5)
// console.log(carpimSonucu); // FONKSYON İÇİNDE TANIMLANAN DEĞERLER SADECE PARANTEZ İÇİNDE ERİŞİLİR DIŞARDAN ERİŞİLEMEZ

function sayilariBol(num1,num2){
  const bolmeSonucu=num1/num2
  console.log("Bölme sonucu :",bolmeSonucu)
}
sayilariBol(100,10)

function sayilariCikart(num1,num2){
  return(num1-num2)
}
const cikartmaSonucu=sayilariCikart(50,20);
console.log("Çıkartma - RETURN - sonucu :",cikartmaSonucu)

//! ---------- 
console.log("---------------- İNTERVAL - SET TİME OUT");

let sayacc=0;
function ekranaBas(){
  sayacc++;
  // console.log("SetTime Sayacın güncel değeri!",sayacc)
}
// setTimeout(ekranaBas,2000) // Sayfa ilk yüklendikten 2 saniye sonra ekrana fonk çağır

// setInterval(ekranaBas,3000) // her 3 saniyede bir ekrana bas fonksiyonu çalıştırılır
// setInterval(()=>{
// sayacc++;
// console.log("INTER Syacın güncel değeri : ",sayacc)
// },3000)

//! arrow function özellik

// const arrowFun=(sayi1,sayi2)=>{
//   return sayi1*sayi2
// }
// const carpimSonucu2=arrowFun(5,3);
// console.log(carpimSonucu2)

// YERİNE

const arrowFun=(sayi1,sayi2)=>sayi1*sayi2

const carpimSonucu2=arrowFun(5,3);
console.log(carpimSonucu2)

//! ÖRNEK
console.log("---------------- FUNCTİON İÇİNDE WHİLE ÖRNEK");

let newNumber = [];
let x = 0;

function number() {
  while (x <= 5) {
    newNumber.push(x);
    x++;
  }
  // console.log(newNumber);
}
number();

//! ÖRNEK

const array=[];
let i=0;

let odev=()=>{
while(array.length<10){
  i++
  array.push(i)
  console.log(array)
}
}
setInterval(odev,1000)
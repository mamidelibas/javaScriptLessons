console.log("---------------- DOM MANİPULATİON ");
// JavaScript ile Html dökümanına yeni elementler ekleme silme değiştirmek icin kullanılır.

//! getElementById ve getElementByClassName : Elementleri yakalamak

let secondText = document.querySelector("#secondText");
// let secondText = document.getElementById("secondText");
console.log(secondText); // id normal şekilde döner id'si aynı olan İLK olanı getirir
let thirdText = document.getElementsByClassName("thirdText");
console.log(thirdText); // class dizi olarak döner kaç eleman varsa hepsini

function yaziyiGuncelle() {
  document.getElementById("firstText").innerHTML = "Selam Mami";
  thirdText[1].innerHTML = "değişti";
}
setTimeout(yaziyiGuncelle, 2000);

//!

let degistir = document.getElementsByClassName("h1Tag");

function odev() {
  document.getElementById("pTag").innerHTML = "Muhammet Delibaş";
  degistir[1].innerHTML = "20-08-2023";
}
setTimeout(odev, 2000);

//!

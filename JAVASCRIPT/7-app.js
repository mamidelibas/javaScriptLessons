console.log("---------------- DOM MANİPULATİON ");

console.log("---------------- SEÇİCİLER ");
// // JavaScript ile Html dökümanına yeni elementler ekleme silme değiştirmek icin kullanılır.

// //! getElementById ve getElementByClassName : Elementleri yakalamak

// let secondText = document.querySelector("#secondText");
// // let secondText = document.getElementById("secondText");
// console.log(secondText); // id normal şekilde döner id'si aynı olan İLK olanı getirir
// let thirdText = document.getElementsByClassName("thirdText");
// console.log(thirdText); // class dizi olarak döner kaç eleman varsa hepsini

// function yaziyiGuncelle() {
//   document.getElementById("firstText").innerHTML = "Selam Mami";
//   thirdText[1].innerHTML = "değişti";
// }
// setTimeout(yaziyiGuncelle, 2000);

// //!

// let degistir = document.getElementsByClassName("h1Tag");

// function odev() {
//   document.getElementById("pTag").innerHTML = "Muhammet Delibaş";
//   degistir[1].innerHTML = "20-08-2023";
// }
// setTimeout(odev, 2000);

//! getElementById, getElementsByClassName ve getElementByName

// let pElemani = document.getElementById("selam"); // Tek eleman döner
// console.log(pElemani);

// let hElemani = document.getElementsByClassName("hava"); // Array döner
// console.log(hElemani);

// let radioElemani = document.getElementsByName("sozlesme");
// console.log(radioElemani);

//! querySelector ve querySelectorAll

// let alinacaklar = document.querySelectorAll(".alinacaklar");
// console.log(alinacaklar);
// let urunler = document.querySelectorAll("#urun");
// console.log(urunler);

console.log("---------------- ELEMANLAR ARASI GEÇİŞLER ");

// const gorevElamani = document.querySelector(".gorev"); // classı gorev olan elemanın annesi
// let urunParent = gorevElamani.parentNode;
// // console.log(urunParent);

// const gorevListesi = document.querySelector("#gorevler");
// let ilkGorev = gorevListesi.firstElementChild; // ilk eleman
// // console.log(ilkGorev);

// let ikinciGorev = ilkGorev.nextElementSibling; // ikinci eleman
// // console.log(ikinciGorev);
// // console.log(ikinciGorev.previousElementSibling); // bir önceki eleman

// const sonGorev = gorevListesi.lastElementChild; // son eleman
// // console.log(sonGorev);

// const gorevler = gorevListesi.children; // tüm elamanlar
// // console.log(gorevler);

console.log("---------------- ATTİRBUTE : getElement setElement ");

let googleLink = document.querySelector(".besinciKisim");
console.log(googleLink);

googleLink.setAttribute("target", "_blank");

let di = document.querySelector(".di");
function divSekillendir() {
  di.setAttribute("width", "200px", "height", "200px");
}

setTimeout(divSekillendir, 5000);

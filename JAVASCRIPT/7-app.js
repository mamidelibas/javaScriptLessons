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

console.log(
   "---------------- ATTİRBUTE : getElement setElement removeElement "
);

// let firstTag = document.querySelector("#aTag");
// console.log(firstTag);

// //! SETATTRİBUTE

// firstTag.setAttribute("href", "https://google.com");
// firstTag.style.color = "green";

// console.log("Linkin rengi :", firstTag.style.color);

// //! Classları elde etmek icin

// console.log("FirstTag Elemanının Class'ı:", firstTag.className);

// firstTag.className += " yeni";

// console.log("FirstTag elemanın class güncellendi :", firstTag.className);

// //! CLASSLİST

// // console.log("firstTag elemanının ClassListi'i: ", firstTag.classList);

// firstTag.classList.add("deneme"); // class eklemek icin
// firstTag.classList.remove("test"); // class silmek için
// firstTag.classList.replace("test-xl", "test-3xl"); // class güncelleme

// // for (let cssClass of firstTag.classList) {
// //    console.log("FirstTag Class'ı: ", cssClass);
// // }

// firstTag.classList.forEach((item) => {
//    console.log("firstTag Class'ı:", item);
// });

// //************* */

// let image = document.querySelector("#loading");
// console.log(image);

// console.log("Loading id'in İLK yüksekliği: ", image.getAttribute("height"));

// function hideElm() {
//    // image.setAttribute("width", 1);
//    // image.setAttribute("height", 1);

//    //! NORMAL SİLMEKK
//    // image.style.display = "none";

//    //! TAİLWİND İLE SİLMEK
//    image.className = image.className + "hidden";

//    //! GET ATTİRBUTE
//    // console.log("Loading id'in SON yüksekliği: ", image.getAttribute("height"));

//    //! REMOVE ATTİRBUTE
//    firstTag.removeAttribute("target");
// }

// function showElm() {
//    console.log(image.classList.contains("block"));

//    image.classList.replace("hidden", "block");

//    //! Class'ta var mı yok mu
//    console.log(image.classList.contains("block"));
// }

// setTimeout(hideElm, 3000);

// setTimeout(showElm, 6000);

//!--------------------
console.log("---------------- createElement ");

let menuElm = document.querySelector("#menu");
console.log(menuElm);
console.log(menuElm.innerHTML); // etiketli getiri
console.log(menuElm.textContent); // doğrudan metinsel olarak getirir

let selamElm = document.querySelector(".selamTxt");
function updateSelamText() {
   selamElm.textContent = "Selam, Güncellendi!";

   let newLiElement = document.createElement("li");
   // newLiElement.textContent = "Yeni Eleman!";

   let liLinkElm = document.createElement("a");
   liLinkElm.setAttribute("href", "https://www.twitter.com");
   liLinkElm.textContent = "Twitter";
   newLiElement.appendChild(liLinkElm);

   menuElm.appendChild(newLiElement);

   //! AFTER METODU

   let homeElm = document.querySelector(".homeElement");

   let newPElm = document.createElement("p");
   newPElm.textContent = "Yeni Bir P Elamanı";

   homeElm.after(newPElm); // herhangi bir elemandan sonra eleman ekleme

   //! REMOVE CHİLD

   let silinecekEleman = document.querySelector("#merhabaTxt");
   menuElm.removeChild(silinecekEleman); // elemanı silme

   //! REPLACE CHİLD

   let cikisYapElm = document.createElement("li");
   cikisYapElm.textContent = "Çıkış Yap";

   let girisYapElm = document.querySelector(".auth");
   menuElm.replaceChild(cikisYapElm, girisYapElm);
}

setTimeout(updateSelamText, 3000);

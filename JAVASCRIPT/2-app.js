// ! -----------------------------------------------------------------
console.log(
  "---------------- ARRAY [ DİZİLER ] - OPERATÖRLER - İF ELSE - ---------------"
);
// ! -----------------------------------------------------------------

let ogrenciler = ["Canberk", "Ahmet", "Mehmet", "Veli", 5, "Fatma", "Mami"];
// console.log("Öğrenciler Array'i : " + ogrenciler);

let ilkOgrenci = ogrenciler[0];
// console.log("İlk öğrenci : " + ilkOgrenci);

let toplamOgrenciSayisi = ogrenciler.length;
// console.log("Dizinin uzunluğu, öğrenci sayısı : " + toplamOgrenciSayisi);

let sonOgrenci = ogrenciler[toplamOgrenciSayisi - 1];
// console.log("Son Eleman : " + sonOgrenci);

ogrenciler.push("Sevgi"); // push : Dizinin sonuna eleman eklemek için kullanılır
// console.log(ogrenciler);

//! MAP Metodu : dizi içinde dönme
console.log("--------- MAP Metod ---------");

// ogrenciler.map((eleman) => console.log("Eleman : ", eleman));

let yeniDizi = [];

ogrenciler.map((eleman) => yeniDizi.push(eleman));
// console.log("Yeni Dizi : ", yeniDizi);

ogrenciler.map((eleman, index) =>
  console.log("Şu anki eleman : ", eleman + ".  İndex'i : " + index)
);

//! boolean DEĞİŞKENİ : Doğru ve yanlış
console.log("--------- BOOLEAN DEĞİŞKEN ---------");

let booleanDegisken1 = true;
let booleanDegisken2 = false;
let booleanControl = 3 == 5;
console.log("Boolean kontrol : ", booleanControl);

//! OPERATÖRLER
console.log("--------- OPERATÖRLER ---------");

let op = 3 == 5; // Eşittir
let op1 = 3 === 5; // Veri, tip olarak Eşittir
let op2 = 10 > 5; // Büyüktür
let op3 = 10 < 5; // Küçüktür
let op4 = 10 != 5; //  Eşit değildir
let op5 = 10 < 5 && 10 < 3; // && ve operatörü. ikiside true olmalıdır yoksa false verir
let op6 = 10 < 3 || 10 < 12; // || veya operatörü. İkisi true olmasına gerek yok bir tanesi yeter
console.log(op);
let op7 = !op6; // Ünlem ! : Sonucun tersini alır. True ise False yapar. False ise True yapar.

//! if else YAPISI : Şart sağlamak icin kullanılır
console.log("--------- İF ELSE YAPISI ---------");

let yeniSayi = 5;

if (yeniSayi == 4) {
  console.log("İF Çalıştı!");
} else if (yeniSayi == 5) {
  console.log("Else İf Çalıştı!");
} else {
  console.log("ELSE Çalıştı!");
}

console.log("---------------- PRATİK ÖRNEK ---------------");

/*

1- Bir array olluşturulacak
2- İçerisinde hayvan isimleri yer alacak
3- Eğer array'in eleman sayusu 3'ten küçük ise 
console'da "Toplam eleman Sayısı3'ten küçüktür" 
şeklinde bir mesaj olacak
4- Eleman sayısı 3'e eşit ise "Toplam 3 eleman var" 
şeklinde mesaj olacak
5- Eğer toplam eleman sayısı 3'ten büyük ise
"3'ten Fazla eleman mevcuttur" şeklinde mesaj olacak 

*/

let animalsList = ["Aslan", "Kedi", "Yılan"];
if (animalsList.length < 3) {
  console.log("Eleman sayısı 3'ten küçüktür");
} else if (animalsList.length == 3) {
  console.log("Toplam 3 eleman var");
} else {
  console.log("3'ten Fazla eleman mevcuttur");
}

animalsList.map((a, index) =>
  console.log("Hayvanlar:", a + ".  Sırası : " + index)
);

//!

let meyve = [
  "Çilek",
  "Erik",
  "Karpuz",
  "Şeftali",
  "Kayısı",
  "Ananas",
  "Armut",
  "Elma",
  "Nektari",
  "Ayva",
];
console.log(meyve);

meyve.push("Kiraz");
console.log(meyve);

let ilkMeyve = meyve[0];
console.log("İlk meyve : " + ilkMeyve);

// let toplamMeyve = meyve.length;
// let sonMeyve = meyve[toplamMeyve - 1];
let sonMeyve1 = meyve[meyve.length - 1];
console.log("Son meyve : " + sonMeyve1);

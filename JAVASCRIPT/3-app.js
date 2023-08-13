console.log("---------------- Dizide FİND VE FİNDİNDEX METOD");

// ! FİND METOD : Koşulu sağlayan ilk elemanı getirir.

let ages = [15, 11, 18, 27, 39, 55, 20, 6, 13];

let findedAge = ages.find((x) => x > 20); // 20'den büyük İLK elemanı getirir
let findedIndex = ages.findIndex((y) => y > 20);
// console.log("Yaş Dizisi:", ages);
// console.log("20'den büyük olan ilk eleman:", findedAge);
// console.log("20'den büyük olan ilk elemanın indexi:", findedIndex); // 20 den büyük İLK elemanın index numarasını verir

console.log("---------------- Dizide SOME ve EVERY METOD");

//! SOME METOD : Veri tipini sağlıyor mu sağlamıyor mu. Elemanlardan bir tanesi şartı sağlaması gerekiyor.

let names = ["Ali", "Ahmet", "Ayşe", "Mehmet", "Mustafa", 15]; // 15 oldugu icin sonuc TRUE döner
let areAllString = names.some((z) => typeof z === "number");

let isBiggerThen18 = ages.some((yas) => yas > 18);
// console.log("18'den büyük eleman var mı : ", isBiggerThen18);

// console.log("Some metod'u sonucu :", areAllString);

//! EVERY METOD : Veri tipini sağlıyor mu sağlamıyor mu. Elemanlardan HEPSİNİN şartı sağlaması gerekiyor.

let everyCheck = names.every((i) => typeof i === "number");
// console.log("Elemanların hepsi number tipinde mi :", everyCheck);

console.log("---------------- Dizide FİLTER METOD");

//! FİLTER METOD : Verilen şarta uyan elemanları yeni bir array içine alır.

let ages1 = [15, 22, 12, 43, 33, 11, 18, 27, 39, 55, 20, 6, 13];

let newAges = ages1.filter((a) => a > 18);
// console.log("18'den büyük olan sayılar dizisi :", newAges);

//! MAP VE FİLTERİN BİRLİKTE KULLANIMI

// filter ile önce 15'ten büyükleri bulur map ile yeni dizinin içinde döner
// ages1.filter((a) => a > 15).map((b) => console.log("Eleman :", b));

console.log("---------------- Dizilerde KISAYOL [Array Deconstruction]");

let names1 = ["Ali", "Ahmet", "Ayşe", "Mehmet", "Mustafa"];

// let firstName = names1[0];
// console.log("İlk eleman :", firstName);
// let secondName = names[1];
// console.log("İkinci eleman :", secondName);

//todo YERİNE KISAYOL OLARAK

let [firstName, secondName, thirdName, forthName] = names1;
// console.log("İlk eleman :", firstName);
// console.log("İkinci eleman :", secondName);
// console.log("Üçüncü eleman :", thirdName);
// console.log("Dördüncü eleman :", forthName);

let ages2 = [15, 22, 12, 43, 33, 11, 18, 27, 39, 55, 20, 6, 13];
let [firstNumber, secondNumber, thirdNumber, ...rest] = ages2;
// console.log(
//   "Almak istedigim ilk 3 eleman ve diğer sayıların dizisi: ",
//   firstNumber,
//   secondNumber,
//   thirdNumber,
//   rest
// );

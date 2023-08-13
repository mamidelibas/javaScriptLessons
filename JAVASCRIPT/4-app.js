console.log("---------------- OBJECT Veri Tipi");

let stringType = "mamidelibas";
let numberType = 15.45;
let booleanType = true.false;
let arratType = [3, "mami", true];

let objectType = {};

// objelerin her bir satırı birer FİELD denir.
// isim,soyisim,yas,mezun olan ilk elemanlar : KEY
// mami,delibaş,23,true olan ikinci elemanlar : VALUE
let ogrenci1 = {
  isim: "Mami",
  soyisim: "Delibaş",
  yas: 23,
  mezun: true,
};
// console.log("Tipi :", typeof ogrenci1, ogrenci1);
// console.log(ogrenci1.isim);

//todo JSON Yapısı

let ogrenciler = [
  {
    isim: "Muhammet",
    soyisim: "Delibaş",
    age: 26,
  },
  {
    isim: "Ahmet",
    soyisim: "Yılmaz",
    age: 30,
  },
  {
    isim: "Ayşe",
    soyisim: "Yıldırım",
    age: 36,
  },
  {
    isim: "Fatma",
    soyisim: "Naz",
    age: 13,
  },
];
// console.log("Öğrenciler Array'i : ", ogrenciler);

let filterArray = ogrenciler.filter((ogrenci) => ogrenci.age > 35);
// console.log("Yaşı 35'ten buyuk olan öğrenciler :", filterArray);

let nestedObject = {
  isim: "Ali",
  soyisim: "Tar",
  yas: 30,
  notlar: {
    matematik: 100,
    turkçe: 90,
    felsefel: 95,
  },
};
// console.log("Nested object (İç içe geçmiş obje)", nestedObject);
// console.log("Matematik notu :", nestedObject.notlar.matematik);

//

let students = [
  {
    isim: "Ali",
    notlar: {
      matematik: 50,
      turkçe: 16,
    },
  },
  {
    isim: "veli",
    notlar: {
      matematik: 55,
      turkçe: 16,
    },
  },
  {
    isim: "mehmet",
    notlar: {
      matematik: 60,
      turkçe: 16,
    },
  },
  {
    isim: "selen",
    notlar: {
      matematik: 60,
      turkçe: 16,
    },
  },
  {
    isim: "devran",
    notlar: {
      matematik: 70,
      turkçe: 16,
    },
  },
];
let student1 = students.filter((ogrenci) => ogrenci.notlar.matematik <= 50);
console.log(student1);

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

// console.log(students[1].notlar.matematik) // 1.indexteki velinin matematik notu

//! Objeceler ile ilgili extra : OBJE İÇİNDE FUNCTİONLAR
console.log("---------------- Obje içinde Function");

let firstPerson = {
  firstName: "Muhammet",
  lastName: "Delibaş",
  age: 24,
  isStudent: false,
  grades: {},
  adresses: [],
  sayHello: function (isim) {
    console.log("Merhabas " + isim);
  },
  bornYear: function () {
    return 2023 - this.age;
  },

  //! JQuery Kısayol

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(firstPerson.sayHello("Mami"));
// console.log(firstPerson.firstName);
// console.log("Doğum yılı :", firstPerson.bornYear());
// console.log("Kullanıcının Adı ve Soyadı : ", firstPerson.getFullName());

function selamSoyle(isim, yas) {
  // console.log("Merhaba " + isim + " Yaşı: " + yas);
}
selamSoyle("Ahmet", 25);

//! hesOwnProperty : Var mı Yok mu? Key aramak için kullanılır

const firtsNameVarMi = firstPerson.hasOwnProperty("firstName");
// console.log("FirstName var mı : ", firtsNameVarMi); // true döner

const emailVarMi = firstPerson.hasOwnProperty("email");
// console.log("Email var mı : ", emailVarMi); // false döner

//! ----------- KÖTÜ KOD YAZIMI

let kullanicininAdi = firstPerson.firstName;
let kullanicininSoyadi = firstPerson.lastName;
let kullaniciYasi = firstPerson.age;
let kullaniciOgrenciMi = firstPerson.isStudent;
// console.log(
//   kullanicininAdi + kullanicininSoyadi + kullaniciYasi + kullaniciOgrenciMi
// );

//! YERİNE --->

let { firstName, lastName, age, isStudent } = firstPerson;
// console.log(firstName, lastName, age, isStudent);

//! BİR OBJEYİ KOPYALAMA ve OBJEYE EKLEME YAPMA (...) Sprit operatör
console.log(
  "---------------- Obje Kopyalama ve Ekleme Cıkartma Yapma : SPİRİT"
);

// console.log("---------------- Sprit Operatör [ Obje Kopyalama ]");

let kopyaObje = {
  ...firstPerson,
  email: "test@gmail.com",
  firstName: "Mehmet",
};
// kopyaObje.firstName="Mami"
delete kopyaObje.lastName;
// console.log(kopyaObje);

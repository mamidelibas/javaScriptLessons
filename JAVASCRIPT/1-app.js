console.log("Merhaba JS");

// ! -----------------------------------------------------------------
console.log(
  "---------------- DEĞİŞKENLER ve DEĞİŞKEN OLUŞTURMA ---------------"
);
// ! -----------------------------------------------------------------

//  const: tek değer atanır & let: istediginiz kadar değer verilebilir

const isim = "Mami"; // String değişken türü, düz yazı tipindeki değerleri tutar ve bunu " " işaretleri içinde tutarız.
// const isim; ---> Bu şekilde tanımlama yapılamaz. Bir başlangıc değeri (initial) değeri giriilmesi zorunludur
let soyisim = "Delibas";

// isim="Yeni isim"  ----> const ön ekiyle oluşturulan değikenlere tekrar yeni değer tanımlaması yapılamaz

let tamIsim = isim + " " + soyisim; // Değişkenleri + işareti ile bölebiliriz
console.log(tamIsim);

soyisim = "Yeni Soyad";
console.log(soyisim);

// ! -------------------------------------------------------
console.log("---------------- MATEMATİKSEL İFADELER ---------------");
// ! -------------------------------------------------------

const number1 = 5; // number : tırnak işareti kullanılmaz
const number2 = 10;
const number3 = "4";
const number4 = 50.75;

const calculate1 = number2 / number1; // Bölme
const calculate2 = number1 * number2; // Çarpma
const calculate3 = number1 + number2; // Toplama
const calculate4 = number2 - number1; // Çıkartma
const calculate5 = 30 * 2 - 5;
const calculate6 = number2 + Number(number3); // Stringi Numbere cevirme
// String ve Number toplanırsa yan yana yazar o yüzden stringi numbere çevirmek gerekir

const stringNumber = number1.toString();
const calculateStringNumbers = stringNumber + number2;
console.log(calculateStringNumbers); // Numberi Stringe Çevirmek

const calculate7 = number4.toFixed(2); // Noktadan sonra sadece bir karakter alır

console.log(calculate1);
console.log(calculate2);
console.log(calculate3);
console.log(calculate4);
console.log(calculate5);
console.log(calculate6);
console.log(calculate7);

let veriTipiOgrenme = typeof number3;
let veriTipiOgrenme2 = typeof number2;
console.log(veriTipiOgrenme);
console.log(veriTipiOgrenme2);

// ! --------------------------------------------------------
console.log(
  "---------------- DEĞİŞKEN TİPLERİ DEVAM = ARRAY : DİZİLER ---------------"
);
// ! --------------------------------------------------------

//

const sayi1 = 5;
const sayi2 = 10;
const sayi3 = 15;
const sayi4 = 20;
const sayi5 = 25;
// yerine
const sayilar = [5, 10, 15, 20, 25, 30, "Selam"];
console.log(sayilar);
console.log("Sayilarin ilk elemanı : " + sayilar[0]);
console.log("Sayılar array'inin eleman sayısı : " + sayilar.length);

const elemanSayisi = sayilar.length;
const sonEleman = sayilar[elemanSayisi - 1];
console.log("Son Eleman : " + sonEleman);

// ÖRNEK

const sayi = [5, 8, 50, 32, 45];
let firstSayi = sayi[0];
// let ikinci = sayi[4];
// let carpim = firstSayi * ikinci;
// console.log(carpim);
let sayiUzunluk = sayi.length;
let endSayi = sayi[sayiUzunluk - 1];
// console.log(firstSayi * endSayi);
let carp = firstSayi * endSayi;
console.log(carp);

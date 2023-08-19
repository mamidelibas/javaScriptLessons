console.log("---------------- SWİTCH CASE YAPISI");

let ageNumber = 12;

if (ageNumber == 15) {
  console.log("Yaş 15");
} else if (ageNumber == 12) {
  console.log("Yaş 12");
} else if (ageNumber == 13) {
  console.log("Yaş 13");
} else if (ageNumber == 14) {
  console.log("Yaş 14");
} else {
  console.log("Hiçbiri değil");
}

switch (ageNumber) {
  case 15:
    console.log("Yaş 15");
    break;
  case 12:
    console.log("Yaş 12");
    break;
  case 13:
    console.log("Yaş 13");
    break;
  case 14:
    console.log("Yaş 14");
    break;
  default:
    console.log("Hiçbiri değil");
}

console.log("---------------- DÖNGÜLER &  LOOPS");

//! forEach DÖNGÜSÜ

let newArray = [40, 35, 50];
newArray.forEach((sayi, index) => {
  console.log("şu anki sayı", sayi);
  //   console.log("Bu sayının index'i", index);
});

//! for DÖNGÜSÜ

for (let i = 0; i < 3; i++) {
  console.log("Mevcut iterasyon:", i);
}

//! while DÖNGÜSÜ : Şart sağlanması gerekiyor yoksa çalışmaz.

let i = 0;
while (i < 3) {
  i++;
  console.log("i değeri 3'ten küçük : ", i);
}

//! do-while DÖNGÜSÜ : Şart sağlanmasa bile bir kere çalışır.

let x = 0;
do {
  x++;
  console.log("x Değeri 3'ten küçük", x);
} while (x < 3);

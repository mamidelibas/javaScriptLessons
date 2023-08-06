// ! -----------------------------------------------------------------
console.log("---------------- ARRAY ---------------");
// ! -----------------------------------------------------------------

let ogrenciler = ["Canberk", "Ahmet", "Mehmet", "Veli", 5, "Fatma", "Mami"];
console.log("Öğrenciler Array'i : " + ogrenciler);

let ilkOgrenci = ogrenciler[0];
console.log("İlk öğrenci : " + ilkOgrenci);

let toplamOgrenciSayisi = ogrenciler.length;
console.log("Dizinin uzunluğu, öğrenci sayısı : " + toplamOgrenciSayisi);

let sonOgrenci = ogrenciler[toplamOgrenciSayisi - 1];
console.log("Son Eleman : " + sonOgrenci);

ogrenciler.push("Sevgi"); // push : Dizinin sonuna eleman eklemek için kullanılır
console.log(ogrenciler);

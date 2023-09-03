console.log("---------------- Mause ve Keywbord EVENT LİSTENER'LAR ");

let uyeOlButonu = document.querySelector("#uyeOlButonu");
let uyeOlButonuPopup = document.querySelector(".uyeOl");
let popupElemani = document.querySelector("#popupKapsayici");
let testElemani = document.querySelector("#test");

let kullaniciAdiTextField = document.querySelector(".kullaniciAdi");
let emailAdres = document.querySelector(".emailAdresi");
let sifre = document.querySelector(".sifre");

// fonksiyonlar

function tiklamaFonksiyonu() {
  //   console.log(popupElemani.classList);
  popupElemani.classList.replace("hidden", "block");
}

function tiklamaFonksiyonuPopup() {
  //   console.log(popupElemani.classList);
  popupElemani.classList.replace("block", "hidden");
}

function testFonksiyonu() {
  alert("Merhaba");
}

function kolayFonksiyon() {
  alert("Kolay Click");
}

// eventler

let ragisterForm = {
  username: "",
  email: "",
  password: "",
};

uyeOlButonu.addEventListener("click", tiklamaFonksiyonu);

uyeOlButonuPopup.addEventListener("click", tiklamaFonksiyonuPopup);

testElemani.addEventListener("click", testFonksiyonu);

kullaniciAdiTextField.addEventListener("keyup", (event) => {
  //   if (event.key == "Escape") window.confirm("Çıkmak istediğine emin misin?");
  if (event.key == "Escape") {
    tiklamaFonksiyonuPopup();
  } else {
    ragisterForm.username = kullaniciAdiTextField.value;
  }
  //   console.log(kullaniciAdiTextField.value);
  console.log(ragisterForm);
});

emailAdres.addEventListener("keyup", (event) => {
  ragisterForm.emailAdres = emailAdres.value;

  console.log(ragisterForm);

  //   console.log((ragisterForm.username = emailAdres.value));
});

sifre.addEventListener("keyup", (event) => {
  ragisterForm.sifre = sifre.value;

  console.log(ragisterForm);

  //   console.log((ragisterForm.username = sifre.value));
});

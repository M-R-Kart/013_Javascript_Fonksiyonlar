//! Window Objesi

veri = window; //! Window objesinin içerisine veri değişkenini atmış oluruz.
console.log(veri);

//! Alert Metodu

alert("Merhaba");

//! Prompt Metodu

var veri2 = prompt("Adınızı giriniz:");

//! Confirm Metodu

veri3 = confirm("Çıkmak istediğinizden emin misiniz?");
if (veri3) {
  console.log("Çıkış gerçekleşti.");
} else {
  console.log("Çıkış gerçekleşmedi.");
}

//! Location Metodu

veri = window.location;
veri = window.location.href;
veri = window.location.hostname;
veri = window.location.protocol;

// window.location.href = "https://www.udemy.com";
//window.location.reload();

console.log(veri);

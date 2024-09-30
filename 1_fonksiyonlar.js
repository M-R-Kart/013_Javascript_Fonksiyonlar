//! Fonksiyonlar (function)

/* //! (1)
function merhaba() {
  console.log("Merhaba");
}

merhaba(); //! Fonksiyonu çalıştırmasını istedik. Fonksiyonu çağırdık.
merhaba();
merhaba(); //! Ne kadar çağırırsak o kadar ekranda yazar.(Farklı yerlerde çağırılabilir.)
*/
/////////////////////////////////////////////////////////////////////////////////////
/* //! (2)
function merhaba(name, age) {
  console.log(`İsim: ${name} Yaş: ${age}`);
}

merhaba("Levent", 37);
merhaba("Aslı", 23);
merhaba("Yasemin", 28);
*/
/////////////////////////////////////////////////////////////////////////////////////
//! (3)
function yasHesapla(dogumYili) {
  return 2021 - dogumYili; //! İşemin sonucunun dönmesi için Return yapısını kullanırız.
}

let ageSamed = yasHesapla(1990);
let ageMehmet = yasHesapla(2000);
let ageCagla = yasHesapla(2005);

// console.log(ageSamed);
// console.log(ageMehmet);
// console.log(ageCagla);

/////////////////////////////////////////////////////////////////////////////////////
//! (4)
function ehliyetAlabilmeDurumu(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let ehliyet = 18 - yas;

  if (ehliyet > 0) {
    console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı.`);
  } else {
    console.log(`${isim} ehliyet alabilirsiniz.`);
  }
}

ehliyetAlabilmeDurumu(1990, "Esra");
ehliyetAlabilmeDurumu(2009, "Eda");
ehliyetAlabilmeDurumu(2005, "Mehmet");

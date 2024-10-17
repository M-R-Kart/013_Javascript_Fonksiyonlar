//! Object Literals

JavaScript te object (nesne), birden fazla değeri tek bir yapıda saklamamızı sağlayan 
veri türüdür. Her değerin bir anahtarı (key) ve değeri (value) vardır. 
Object literals ise JavaScript te nesne oluşturmanın en basit yoludur; 
süslü parantezler {} içinde anahtar-değer çiftleriyle nesne tanımlanır.

//! 1) Object Literals ile Nesne Oluşturma :
Object literals, anahtar-değer çiftlerini kullanarak nesneleri tanımlamak için kullanılır. 
Aşağıda basit bir örnek bulunuyor.

// let firstName = "Muhammet";
// let lastName = "Kart";

// let firstName2 = "Muhammet";
// let lastName2 = "Kart"; //! Kullanımı kesinlikle çok zor.

// let muhammet = ["Muhammet","Kart","28"];
// let esra = ["Esra","Yaşlı",40];  //! Kullanımı kesinlikle çok zor.

  //? Örnek:

    let kisi = {
      ad: "Ahmet",       // anahtar: ad, değer: "Ahmet"
      yas: 25,           // anahtar: yas, değer: 25
      meslek: "Mühendis" // anahtar: meslek, değer: "Mühendis"
    };
    
    Bu örnekte, kisi adlı nesne üç farklı anahtar-değer çiftinden oluşuyor: ad, yas ve meslek.

//! /////////////////////////////////////////////////////////////////////////////////////////

//! 2) Nesneye Erişim:
Bir nesnenin içerisindeki verilere iki farklı yolla erişebilirsin.

  //! a. Nokta Notasyonu (.)

    //? Örnek: 

      let kisi = {
      ad: "Ahmet",
      yas: 25, 
      meslek: "Mühendis",
      };
    
      console.log(kisi.ad); // "Ahmet"
      console.log(kisi.yas); // 25
  
  //! ************************************************

  //! b. Köşeli Parantez Notasyonu ([])
  Anahtarın bir string olduğu durumlarda veya dinamik bir anahtar kullanıldığında kullanılır.   

    //? Örnek: 

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        meslek: "Mühendis", // anahtar: meslek, değer: "Mühendis"
      };
      
      console.log(kisi["meslek"]); // "Mühendis"
      
    *  Nokta notasyonu en yaygın ve okunaklı yöntemdir.
    *  Köşeli parantez notasyonu ise özellikle anahtar adı bir değişken olduğunda kullanılır.
  
//! /////////////////////////////////////////////////////////////////////////////////////////

//! 3. Nesneye Yeni Özellik Ekleme veya Mevcut Özelliği Değiştirme
Nesneye yeni bir özellik eklemek için basitçe nokta notasyonu veya köşeli parantez 
notasyonu kullanabilirsin.

  //! a. Yeni Özellik Ekleme:

    //? Örnek: 

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        meslek: "Mühendis", // anahtar: meslek, değer: "Mühendis"
      };

      kisi.soyad = "Yılmaz"; // Yeni Özellik eklendi.
      console.log(kisi.soyad); // Yılmaz

  //! ************************************************

  //! b. Mevcut Özelliği Değiştirme:
    
    //? Örnek:

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        meslek: "Mühendis", // anahtar: meslek, değer: "Mühendis"
      };
      
      kisi.ad = "Mehmet"; // Mevcu ad değişti.
      console.log(kisi.ad); // Mehmet

//! /////////////////////////////////////////////////////////////////////////////////////////

//! 4. Nesne İçinde Fonksiyon (Yöntem) Tanımlama
Nesneler yalnızca verileri tutmaz, aynı zamanda fonksiyonlar da içerebilir. 
Bu fonksiyonlara yöntem (method) denir.

    //? Örnek: 

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        selamVer: function () {
          console.log("Merhaba, benim adım" + " " + this.ad);
        },
      };
      
      kisi.selamVer(); // "Merhaba, benim adım Ahmet"

    * Burada selamVer, kisi nesnesine ait bir fonksiyondur.
    * this anahtar kelimesi, o anki nesneyi ifade eder. 
      Yani this.ad, kisi nesnesindeki ad özelliğine işaret eder.    

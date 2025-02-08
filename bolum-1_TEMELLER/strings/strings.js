let ad = "agit";
let soyad = "fındıkcı";
let yas = 65;
let sehir = "istanbul";
let emeklilik = (65 - yas >0) ? "emekli olmama " + (65- yas) + " yıl kaldı." : "emekliyim.";

//let mesaj= "Benim adım " + ad + " " + soyad + ", " + (2021-dogumYili) + " yaşındayım ve " + sehir + " şehrinde yaşıyorum.";
//backtick `
let mesaj= `Benim adım ${ad} ${soyad}, ${2021-yas} yaşındayım ve ${sehir} şehrinde yaşıyorum. ${emeklilik}`;
console.log(mesaj);
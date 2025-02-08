/*
    1- iki öğrencinin aşağıdaki bilgilerini içerisinde saklayınız.

    öğrenci 1: 
        isim        : Mustafa Murat Coşkun
        doğum tarihi: 1990
        matematik notları: 70, 80, 85;

    öğrenci 2:
        isim        : Sinan Uçar
        doğum tarihi: 1995
        matematik notları: 80, 85, 90;

    2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
    3- öğrencilerin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.

*/

let ogrenci1= {
    isim: "Mustafa Murat Coskun",
    dogum_tarihi: 1990,
    matematik_notlar: [70, 80, 85]
}

let ogrenci2= {
    isim: "Sinan Uçar",
    dogum_tarihi: 1995,
    matematik_notlar: [80, 85,90]
}

var yas_ogrenci1 = 2025-1990;
var yas_ogrenci2 = 2025-1995;


var ortalama_ogrenci1= (ogrenci1.matematik_notlar[0] + ogrenci1.matematik_notlar[1] + ogrenci1.matematik_notlar[2]) / 3;
var ortalama_ogrenci2= (ogrenci2.matematik_notlar[0] + ogrenci2.matematik_notlar[1] + ogrenci2.matematik_notlar[2]) / 3;

ogrenci1.basarilimi = ortalama_ogrenci1 >= 50;
ogrenci2.basarilimi = ortalama_ogrenci2 >= 50;


console.log(ogrenci1.isim + " | " + yas_ogrenci1 + " | " + ortalama_ogrenci1 + " | " + ogrenci1.basarilimi);
console.log(ogrenci2.isim + " | " + yas_ogrenci2 + " | " + ortalama_ogrenci2 + " | " + ogrenci2.basarilimi);


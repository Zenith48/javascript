let kursAdi = "Komple Uygulamali Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase(); // küçük harfe çevirir
sonuc = kursAdi.toUpperCase(); // büyük harfe çevirir
sonuc = kursAdi.length; // karakter sayısını verir
sonuc = kursAdi.slice(0,10);   // 0. indexten başlayarak 10 karakter alır
sonuc = kursAdi.slice(-10); // sondan 10 karakter alır
sonuc = kursAdi.indexOf("Web"); // Web kelimesinin başlangıç indexini verir
sonuc = kursAdi.substring(0,6); // 0. indexten başlayarak 6 karakter alır
sonuc = kursAdi.substring(6); // 6. indexten başlayarak sona kadar alır

sonuc = kursAdi.replace("Web","Mobil"); // Web kelimesini Mobil ile değiştirir
sonuc = kursAdi.trim(); // baştaki ve sondaki boşlukları siler
sonuc = kursAdi.trimEnd(); // sadece sondaki boşlukları siler
sonuc = kursAdi.split(" "); // boşluklara göre ayırır ve diziye çevirir
sonuc = kursAdi.split(""); // her karakteri ayırır ve diziye çevirir
sonuc = kursAdi.split(" ")[2]; // boşluklara göre ayırır ve 2. elemanı verir


console.log(sonuc);

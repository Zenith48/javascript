let sonuc;

sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = isNaN("10a");

let sayi = 15.12345;
sonuc = sayi.toPrecision(5); // 15.123
let sayi1 = 16.5;
sonuc = sayi1.toFixed(); // 17 

sonuc = Math.round(2.4); // 2
sonuc = Math.round(2.5); // 3
sonuc = Math.ceil(2.1); // 3 // yukarı yuvarlar
sonuc = Math.floor(2.9); // 2 // aşağı yuvarlar
sonuc = Math.sqrt(16); // 4 // karekök
sonuc = Math.pow(2,4); // 16 // üs alma
sonuc = Math.min(1,2,3,4,5); // 1 // en küçük sayı  
sonuc = Math.max(1,2,3,4,5); // 5 // en büyük sayı
sonuc = Math.floor(Math.random() * 10); // 0 ile 10 arasında rastgele sayı

console.log(typeof sonuc);
console.log(sonuc);
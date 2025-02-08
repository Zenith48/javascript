// let urun1 = "Samsung galaxy s10";
// let urun2 = "Samsung galaxy s9";
// let urun3 = "Samsung galaxy s8";

let urunler = ["Samsung galaxy s10", "Samsung galaxy s9", "Samsung galaxy s8"];
let fiyatlar = [5000, 4000, 3000];
let renkler = ["Siyah", "Beyaz", "Mavi"];

let urun1 = [
    "Samsung galaxy s10",
     5000, 
     ["Siyah", "Beyaz", "Mavi"]];

let urun2 = [
    "Samsung galaxy s9",
    4000, 
    "Beyaz"]; 

let urun3 = [
    "Samsung galaxy s8", 
    3000, 
    "Mavi"];

console.log(urunler[0]); // Samsung galaxy s10
console.log(fiyatlar[0]); // 5000

console.log(`${urunler[0]} fiyatı: ${fiyatlar[0]} renk: ${renkler[0]}`); // Samsung galaxy s10 fiyatı: 5000 renk: Siyah

console.log(`${urun1[0]} fiyatı: ${urun1[1]} renk: ${urun1[2][0]}`); // Samsung galaxy s10 fiyatı: 5000 renk: Siyah
console.log(urun1[2][1]); // Beyaz

let ogrenciler = ["Ahmet", "Can", "Hasan", "Hüseyin"];
sonuc = ogrenciler.length;

//array to string

sonuc = ogrenciler.toString(); // Ahmet,Can,Hasan,Hüseyin
sonuc = ogrenciler.join(" | "); // Ahmet | Can | Hasan | Hüseyin

//eleman silme

sonuc = ogrenciler.pop(); // Hüseyin // son elemanı siler
sonuc = ogrenciler.shift(); // Ahmet // ilk elemanı siler

//eleman ekleme

sonuc = ogrenciler.push("Mehmet"); // 4 // sona eleman ekler
sonuc = ogrenciler.unshift("Ali"); // 5 // başa eleman ekler


console.log(sonuc); // 4
console.log(ogrenciler); // [ 'Can', 'Hasan' ]


let markalar1 = ["Samsung", "Apple", "Huawei", "Xiaomi"];
let markalar2 = ["Asus", "Acer", "Lenovo", "HP"];
let markalar3= ["Casper", "Monster", "MSI", "Dell"];

sonuc1 = markalar1.concat(markalar2, markalar3); // 12 // 3 arrayi birleştirir
markalar1.splice(0, 1, "Vestel"); // Samsung yerine Vestel yazar

console.log(sonuc1);
console.log(markalar1);

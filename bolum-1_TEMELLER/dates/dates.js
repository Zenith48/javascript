let simdi = new Date();

//Get methodları
sonuc = simdi;
sonuc = simdi.getDate(); // gün
sonuc = simdi.getDay(); // haftanın günü
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours(); // saat
sonuc = simdi.getMinutes(); // dakika
sonuc = simdi.getSeconds(); // saniye
sonuc = simdi.getMonth(); // ay

//Set methodları
simdi.setMonth(11); // ay
simdi.setDate(15); // gün
simdi.setFullYear(2023); // yıl
simdi.setHours(12); // saat
simdi.setMinutes(30); // dakika
simdi.setSeconds(15); // saniye


console.log(sonuc);
console.log(typeof sonuc);
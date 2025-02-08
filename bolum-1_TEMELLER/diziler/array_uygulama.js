// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturun.
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlı
console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);

// 4- Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekle
console.log(meyveler.push("Kiraz"));

// 6- Dizinin son 2 elemanını sil
console.log(meyveler.splice(meyveler.length - 2, 2));
console.log(meyveler);
// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız
/*
    Öğrenci 1: Agit 2010 (70,80,90)
    Öğrenci 2: Ayşe 1999 (80,80,80)
    Öğrenci 3: Ahmet 2001 (85,90,95)
*/

    let simdi = new Date();
    let currentYear = simdi.getFullYear();

    let ogrenciler = [
        ["Agit", currentYear - 2010, [70, 80, 90]],
        ["Ayşe", currentYear - 1999, [80, 80, 80]],
        ["Ahmet", currentYear - 2001, [85, 90, 95]]
    ];

    console.log(`${ogrenciler[0][0]} yaş: ${ogrenciler[0][1]} not ortalaması: ${(ogrenciler[0][2][0] + ogrenciler[0][2][1] + ogrenciler[0][2][2]) / 3}`);
    console.log(`${ogrenciler[1][0]} yaş: ${ogrenciler[1][1]} not ortalaması: ${(ogrenciler[1][2][0] + ogrenciler[1][2][1] + ogrenciler[1][2][2]) / 3}`);
    console.log(`${ogrenciler[2][0]} yaş: ${ogrenciler[2][1]} not ortalaması: ${(ogrenciler[2][2][0] + ogrenciler[2][2][1] + ogrenciler[2][2][2]) / 3}`);




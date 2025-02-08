// kendisine gönderilen kelimeyi belirtilen kez ekranda yazdıran fonksiyon
function kelimeTekrar(){
    let kelime = "Merhaba";
    let adet = 5;
    for(let i = 0; i < adet; i++){
        console.log(kelime);
    }
}
kelimeTekrar();

// Dikdörtgenin alan ve çevresini bulan fonksiyonu yazdırınız

function alanCevre(){
    let kenar1 = 4;
    let kenar2 = 5;
    let alan = kenar1 * kenar2;
    let cevre = 2 * (kenar1 + kenar2);

    console.log(`Alan: ${alan} Çevre: ${cevre}`);
}

alanCevre();
// Yazı tura uygulamasını fonksiyon kullanarak yap

function yaziTura(){
    let sayi = Math.round(Math.random() * 1);
    if(sayi == 0){
        console.log("Yazi");
    }
    else{
        console.log("Tura");
    }
}

yaziTura();
// Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren donksiyonu yazdırınız
function tamBolen(sayi){
    let tamBolenler = [];
    for(let i = 1; i <= sayi; i++){
        if(sayi % i == 0){
            tamBolenler.push(i);
        }
        
    }
    return tamBolenler;
}

console.log(tamBolen(15));

// Değişken sayıda parametre alan toplam isminde bir fonksiyon yazdırınız.
function toplam(){
    let toplam = 0;
    for(let i = 0; i < arguments.length; i++){
        toplam += arguments[i];
    }
    return toplam;
}

console.log(toplam(1,2,3));
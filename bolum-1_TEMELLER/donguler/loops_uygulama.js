let sayilar = [1,2,3,4,5,6,7,8,9,10];


    //1- listedeki her bir elemanın karesini hesapla
    for(let i = 0; i < sayilar.length; i++){
        console.log(`Sayi ${sayilar[i]} karesi: ${(sayilar[i] * sayilar[i])}`);
    }
    //2- listedeki hangi sayılar 5'in katıdır
    for(let i = 0; i < sayilar.length; i++){
        if(sayilar[i] % 5 == 0){
            console.log(`${sayilar[i]} 5'in katıdır`);
        }
    }
    //3- listedeki çift sayıların toplamı
    let toplam = 0;
    for(let i = 0; i < sayilar.length; i++){
        if(sayilar[i] % 2 == 0){
            toplam += sayilar[i];
        }
    }
    console.log(`Çift sayıların toplamı: ${toplam}`);


let urunler = ["elma", "armut", "muz", "kivi"];

    //4- listedeki tüm ürünleri büyük harf ile yazdır.
    for(let i = 0; i < urunler.length; i++){
        console.log(urunler[i].toUpperCase());
    }

    //5- listede içinde a harfi olan kaç ürün vardır?
    let urunSayisi = 0;
    for(let i = 0; i < urunler.length; i++){
        if(urunler[i].includes("a")){
            urunSayisi++;
        }
    }


let ogrenciler = [
    {
        ad: "agit",
        notlar: [80,90,100]
    },

    {
        ad: "fırat",
        notlar: [60,70,80]
    },

    {
        ad: "selim",
        notlar: [30,40,50]
    }
];


    //6- listedeki her öğrencinin not ortalaması ve başarı durumunu yazdır (50den büyükse geçti, küçükse kaldı)
    for(let i = 0; i < ogrenciler.length; i++){
        let ortalama = 0;
        for(let j = 0; j < ogrenciler[i].notlar.length; j++){
            ortalama += ogrenciler[i].notlar[j];
        }
        ortalama = ortalama / ogrenciler[i].notlar.length;
        console.log(`${ogrenciler[i].ad} not ortalaması: ${ortalama} ve ${ortalama >= 50 ? "geçti" : "kaldı"}`);
    }
    //7- tüm öğrencilerin not ortalaması kaçtır
    let toplamNot = 0;
    let toplamOgrenci = 0;
    for(let i = 0; i < ogrenciler.length; i++){
        for(let j = 0; j < ogrenciler[i].notlar.length; j++){
            toplamNot += ogrenciler[i].notlar[j];
            toplamOgrenci++;
        }
    }
    let ortalama = toplamNot / toplamOgrenci;
    console.log(`Tüm öğrencilerin not ortalaması: ${ortalama}`);
    




/*
    1- Sipariş bilgilerini object içinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv= %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: istanbul
    satın alınan ürünler:
        ürün id: 1
        ürün başlığı: Samsung S25 ultra
        ürün url: http:/abc.com/samsung-s25-ultra
        ürün fiyatı: 5000
        
        ürün id: 2
        ürün başlığı: Samsung S25
        ürün url: http:/abc.com/samsung-s25
        ürün fiyatı: 4000
    müşteri:
        müşteri id: 11
    satıcı:
        firma id: 21
        firma adı: Samsung
    
    sipariş id: 102
    sipariş tarihi: 31.12.2025
    ödeme şekli: havale
    kargo adresi: ankara
    satın alınan ürünler:
        ürün id: 3
        ürün başlığı: Samsung S20 ultra
        ürün url: http:/abc.com/samsung-s20-ultra
        ürün fiyatı: 3000

    müşteri:
        müşteri id: 12
    satıcı:
        firma id: 21
        firma adı: Samsung
*/

//1- Sipariş bilgilerini object içinde saklayınız.
let siparis1 = {
    siparis_id : 101,
    siparis_tarihi: "31.12.2025",
    odeme_sekli: "kredi kartı",
    kargo_adresi: "istanbul",
    
    urunler:{
        urun_id: 1,
        urun_basligi: "Samsung S25 ultra",
        urun_url: "http:/abc.com/samsung-s25-ultra",
        urun_fiyati: 5000,
        
        urun_id: 2,
        urun_basligi: "Samsung S25",
        urun_url: "http:/abc.com/samsung-s25",
        urun_fiyati: 4000
    },

    musteri: {
        musteri_id: 11
    },

    satici: {
        firma_id: 21,
        firma_adi: "Samsung"
    }
}

let siparis2 = {
    siparis_id : 102,
    siparis_tarihi: "31.12.2025",
    odeme_sekli: "havale",
    kargo_adresi: "ankara",

    urunler:{
        urun_id: 3,
        urun_basligi: "Samsung S20 ultra",
        urun_url: "http:/abc.com/samsung-s20-ultra",
        urun_fiyati: 3000
    },


    musteri: {
        musteri_id: 12
    },

    satici: {
        firma_id: 21,
        firma_adi: "Samsung"
    }
}

console.log(siparis1);
console.log(siparis2);

console.log(siparis1.urunler.urun_fiyati);
console.log(siparis2.urunler);

//2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv= %18)
let kdv = 0.18;
let siparis1_ucret = (siparis1.urunler.urun_fiyati + siparis1.urunler.urun_fiyati) * kdv + (siparis1.urunler.urun_fiyati + siparis1.urunler.urun_fiyati);
let siparis2_ucret = (siparis2.urunler.urun_fiyati * kdv) + (siparis2.urunler.urun_fiyati);
console.log(`sipariş 1 kdv dahil toplam ödenen ücret: ${siparis1_ucret}TL`);
console.log(`sipariş 2 kdv dahil toplam ödenen ücret: ${siparis2_ucret}TL`);

//3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

let toplam_ucret = siparis1_ucret + siparis2_ucret;
console.log(`Toplam sepet tutarı: ${toplam_ucret}TL`);
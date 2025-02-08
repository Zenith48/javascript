let user1 = {
    name: "agit",
    age: 30,
    adres: {
        sehir: "istanbul",
        mahalle: "bahcelievler"
        },
    }

let user2 ={
    name: "ayse",
    age: 25,
    adres: {
        sehir: "ankara",
        mahalle: "cankaya"
    }
}

let users= [
    user1,
    user2
]

let sonuc;
sonuc = users[1].adres.sehir;

console.log(sonuc);

let urunler = [
    {
        urun_adi : "Samsung galaxy s10",
        fiyat: 5000,
        renk: ["Siyah", "Beyaz", "Mavi"]
    },

    {
        urun_adi : "Samsung galaxy s9",
        fiyat: 4000,
        renk: ["Siyah", "Beyaz", "Mavi"]
    },

    {
        urun_adi : "Samsung galaxy s8",
        fiyat: 3000,
        renk: ["Siyah", "Beyaz", "Mavi"]
    }
]

console.log(urunler[2].urun_adi);
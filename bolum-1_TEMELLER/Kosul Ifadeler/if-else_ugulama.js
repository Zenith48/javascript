// Bir sayının 10-50 arasında olup olmadığını kontrol eden bir uygulama yazınız.
// Bir sayının pozitif tek sayı olup olmadığını kontrol eden bir uygulama yazınız.
//x, y,z sayılarının büyüklük karşılaştırması
// 2 vize ve bir final notuna göre hesaplanan ortalama için;
    // Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazdırınız.
    // Geçmek için ortalama 50 bile olsa final notu en az 50 olmalı
    // Finalden 70 alındığında ortalama 50 altındaysa bile dersten geçilsin

// Bir sayının 10-50 arasında olup olmadığını kontrol eden bir uygulama yazınız.
/* let sayi = 5;
if(sayi>=10 && sayi<=50){
    console.log("sayi 10 ile 50 arasında");
}
else if (sayi<10){
    console.log("sayi 10'dan küçük");
}
else{
    console.log("sayi 50'den büyük");
} 
*/

// Bir sayının pozitif tek sayı olup olmadığını kontrol eden bir uygulama yazınız.
/*
let sayi = -11;
if (sayi >0){
    if(sayi%2==1){
        console.log("Sayı pozitif ve tek");
    }
    else{
        console.log("Sayı pozitif ve çift");
    }
}
else if (sayi<0){
    if(sayi%2==-1){
        console.log("Sayı negatif ve tek");
    }
    else{
        console.log("Sayı negatif ve çift");
    }
}
else{
    console.log("Sayı sıfır");
}
*/

//x, y,z sayılarının büyüklük karşılaştırması
/*
let x = 10, y= 5, z=15;

if(x>z && x>y){
    console.log("x en büyük sayı");
}
else if(y>x && y>z){
    console.log("y en büyük sayı");
}
else if(z>x && z>y){
    console.log("z en büyük sayı");
}
else if(x==y && x==z){
    console.log("x,y ve z eşit");
}
else if(x==y){
    console.log("x ve y eşit");
}
else if(x==z){
    console.log("x ve z eşit");
}
else if(y==z){
    console.log("y ve z eşit");
}
else{
    console.log("Bir sayı en büyük değil");
}

*/

// 2 vize ve bir final notuna göre hesaplanan ortalama için;
let vize = 0,final = 70;
let ortalama = (vize *0.4) + final *0.6;
console.log("Ortalama: " + ortalama);
if ((ortalama >=50 && final>=50) || final>=70){
    console.log("Geçti");
} 
else{
    console.log("Kaldı");
}
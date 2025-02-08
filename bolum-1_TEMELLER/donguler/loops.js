let toplam = 0;

// for(let i = 1; i < 5; i++){
//     toplam = toplam*i;
// }

// console.log(toplam);

// let sayilar = [1,2,3,4,5,6,7,8,9,10];

// // for(let i=0; i<sayilar.length; i++){
// //     console.log(sayilar[i]);
// // }

// for(let sayi of sayilar){
//     toplam += sayi;
// }

// console.log(toplam);

let user = {
    name: "Ahmet",
    age: 25,
    email: "infoo@agitf.com"
};

for(let key in user){
    console.log(key + " : " + user[key]);
}
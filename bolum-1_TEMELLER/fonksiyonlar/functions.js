function selamlama(msg){
    console.log(msg);
}

selamlama("hello");

function yasHesapla(dogumYili){
    return (new Date().getFullYear() - dogumYili);
}

let yasAgit = yasHesapla(2004)

console.log(yasAgit);
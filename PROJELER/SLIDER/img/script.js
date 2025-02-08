var models = [
    {
        name: "Resim 1",
        image:"iletisim.jpg",
        link: 'https://www.instagram.com/ag.f04/'
    },
    
    {
        name: "Resim 2",
        image:"haberler.jpg",
        link: 'https://www.instagram.com/ag.f04/'
    },
    
    {
        name:"Resim 3",
        image:"konserler.jpg",
        link: 'https://www.instagram.com/ag.f04/'
    }
];

var index = 0;
var slideCount = models.length;
var interval;

var settings= {
    duration: '1000',
    random: false

}

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function(){
    index--;
    slideShow(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function(){
    index++;
slideShow(index);

    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    var prev;
    interval = setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slideCount);
            }
            while(index == prev)
            prev = index;
        }
        else{
            if(slideCount == index+1){
                index = -1;
            }

            slideShow(index);
            console.log(index);
            index++;
        }
        slideShow(index);

    }, settings.duration)
}

function slideShow(i){
    index = i;

    if(i<0){
        index = slideCount - 1;
    }
    if(i>= slideCount){
        index = 0;
    }
    document.querySelector('.card-link').setAttribute('href', models[index].link);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image); 
}
    


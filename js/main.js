const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);
let img = document.querySelector(`img`)
let gameTitle = document.querySelector(`h2`)
let gameInfo = document.querySelector(`h5`)

// images.forEach((elem) =>{
//     console.log(elem.image)
// })

console.log(images[0].image)

let i = 0;
next.addEventListener(`click`, function(){
    i++
    img.src = images[i].image
    gameTitle.innerText = images[i].title
    gameInfo.innerText = images[i].text
    if(i == 4){
        i = 0
        i--
    }
})
prev.addEventListener(`click`, function(){
    i--
    img.src = images[i].image
    gameTitle.innerText = images[i].title
    gameInfo.innerText = images[i].text
    if (i == 0){
        i = 4
        i++
    }
})
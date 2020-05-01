// nav 
var navigationTimeline = anime.timeline({
    easing: 'easeInOutExpo',
});
navigationTimeline
.add({
    targets: '.navbar',
    height: '100px',
})
.add({
    targets: '.navbar-nav',
    translateX: [-700, 0],
    duration: 500
});

anime({
    targets: '.navbar',
    opacity: 0.7,
    delay: 700,
    duration: 2000,
})

//offer 
let offerItem = document.getElementsByClassName('offer-item');

for(i = 0; i < offerItem.length; i++) {

    offerItem[i].addEventListener('click', function () {
        console.log('click');
        let offerCollapse = anime({
            targets: offerItem[i],
            width: '100%',
        })

        
    })
}
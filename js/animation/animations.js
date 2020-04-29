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
})



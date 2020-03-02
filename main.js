

// CAROUSEL FOR GALLERY Album
const carousel = document.querySelectorAll(".carousel");
console.log(carousel, 'Here!');
M.Carousel.init(carousel);

// CAROUSEL SLIDER FULL WITH INDICATOR
const carouselFull = document.querySelectorAll(".carousel-slider");
console.log(carouselFull, 'Here2!!');
M.Carousel.init(carouselFull, { fullWidth: true, indicators: true });

// COLLAPSIBLE TAB
const coll = document.querySelectorAll('.collapsible.expandable');
const activeColl = M.Collapsible.init(coll, { accordion: false });

// TOAST 
// You can add it on Link or a Button with "onclick" = M.toast({ html: 'I am a toast' });

// TOOLTIPS 
let tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip, { enterDelay: 1000 });

// DROPDOWN 
let drop = document.querySelectorAll('.dropdown-trigger');
console.log(drop)
M.Dropdown.init(drop, {});

// MATERIALBOX
const matBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(matBox, {});

// SLIDER IMG
const slidImg = document.querySelectorAll('.slider');
M.Slider.init(slidImg, {});

// MODAL 
const modalBtn = document.querySelectorAll('.modal');
M.Modal.init(modalBtn, {});

// TABS
const tabItem = document.querySelectorAll('.tabs');
M.Tabs.init(tabItem, {});
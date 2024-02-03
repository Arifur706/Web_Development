var img = ['diuLogo.png', 'Untitled.png', 'my.png'];
var imgTags = document.querySelectorAll('img');

var count = 0;

function updateSliders() {
    imgTags.forEach((imgTag, index) => {
        let imgIndex = (count + img.length - index) % img.length;
        imgTag.src = img[imgIndex];
    });
}


function autoSlide() {
    count = (count + 1) % img.length; 
    updateSliders();
}


updateSliders();

setInterval(autoSlide, 2000);

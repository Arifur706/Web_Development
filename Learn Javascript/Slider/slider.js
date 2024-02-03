var img = ['diuLogo.png', 'Untitled.png', 'my.png']

var imgtag = document.querySelector('img');

var count = 0;


function next()
{
    count++;
    if(count>=img.length){
        count=0;
        imgtag.src = img[count];
    }
    else{
    imgtag.src = img[count];
    }
}

function pre()
{
    count--;
    if(count < 0){
        count = img.length - 1;
        imgtag.src = img[count];
    }

    else{
        imgtag.src = img[count];
        }  
}

function autoSlide() {
    next(); 
}

setInterval(autoSlide, 2000);
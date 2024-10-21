const img_list = Array.from(document.getElementsByClassName("slideshowPic"));

console.log(img_list);
console.log(img_list.length);

shuffle(img_list);
setDisplay();
slideshow();

function setDisplay(){
    for(let i=0;i<img_list.length;i++){
        img_list[i].style.display="none";
        img_list[i].style.opacity = 0;
    }
}

function shuffle(array) {
    let currentIndex = array.length;

    // Start shuffling from the second element
    let startIndex = 0;

    // While there remain elements to shuffle...
    while (currentIndex !== startIndex) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * (currentIndex - startIndex)) + startIndex;
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function fadeIn(im){
    let opacity = parseFloat(img_list[im].style.opacity) || 0; 
    if(opacity===0)img_list[im].style.display="block";
    opacity += 0.01;
    img_list[im].style.opacity = opacity;
    if(opacity >= 1){
        setTimeout(function(){
            fadeOut(im);
            if(im<img_list.length-1){
                im++;
            }
            else{
                im=1;
            }
            img_list[im].style.display="block";
            fadeIn(im);
        },2000);
        return;
    }
    setTimeout(function(){
        fadeIn(im);
    }, 20);
}

function fadeOut(im){
    let opacity = parseFloat(img_list[im].style.opacity) || 1; 
    opacity -= 0.01;
    img_list[im].style.opacity = opacity;
    if(opacity === 0){
        img_list[im].style.display="none";
        return;
    }
    setTimeout(function(){
        fadeOut(im);
    }, 20);
}

function slideshow(){
    let i=1;
    img_list[i].style.display="block";
    fadeIn(i);
}
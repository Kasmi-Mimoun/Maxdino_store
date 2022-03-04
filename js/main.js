// javaScript Document

// dropdown menu 
let navBar = document.getElementById('nav-bar');
let menuButton = document.getElementById('toggle');
let icon = document.getElementById("icon");

menuButton.onclick = function(){
    if (navBar.style.height == "40px"){
        navBar.style.height = "400px";
        icon.className = "fas fa-times";
    }else{
        navBar.style.height = "40px";
        icon.className = "fas fa-bars";
    }
}

// the main slider 
let slider1 = document.getElementById("slider-1");
let slider2 = document.getElementById("slider-2");
let sliderChild = document.getElementsByClassName("slider_child");
slider1.onclick = function(){
    sliderChild[0].classList.add('show', 'right');
    sliderChild[1].classList.remove('show', 'left');
    slider1.style.backgroundColor = "#ffbe0f";
    slider2.style.backgroundColor = "#ffffff";
}
slider2.onclick = function(){
    sliderChild[1].classList.add('show', 'left');
    sliderChild[0].classList.remove('show', 'right');
    slider1.style.backgroundColor = "#ffffff";
    slider2.style.backgroundColor = "#ffbe0f";
}




// on sale slider 
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let onSaleContainer = document.getElementById("on_sale");
let onSale = document.getElementById("on_sale_parrent");
let onSaleChild = document.getElementsByClassName("three_children");
let i = 0;
next.onclick = function(){
    if(i < onSaleChild.length-1){
        onSaleChild[i+1].classList.add('show', 'right');
        onSaleChild[i].classList.remove('show', 'right', 'left');
        next.style.opacity = "1";
        prev.style.opacity = "1";
        i++;
    }
    if(i == onSaleChild.length-1){
        next.style.opacity = "0.2";
    }
}
prev.onclick = function(){
    if(i >= 1){
        onSaleChild[i-1].classList.add('show', 'left');
        onSaleChild[i].classList.remove('show', 'left', 'right');
        next.style.opacity = "1";
        prev.style.opacity = "1";
        i--;
    }
    if(i == 0){
        prev.style.opacity = "0.2";
    }
}

// testimonial slider 
let nextTest = document.getElementById("next-test");
let prevTest = document.getElementById("prev-test");
let testChild = document.getElementsByClassName("test_children");
let h = 0;
nextTest.onclick = function(){
    if(h < testChild.length-1){
        testChild[h+1].classList.add('show', 'right');
        testChild[h].classList.remove('show', 'right', 'left');
        nextTest.style.opacity = "1";
        prevTest.style.opacity = "1";
        h++;
    }
    if(h == testChild.length-1){
        nextTest.style.opacity = "0.2";
    }
}
prevTest.onclick = function(){
    if(h >= 1){
        testChild[h-1].classList.add('show', 'left');
        testChild[h].classList.remove('show', 'left', 'right');
        nextTest.style.opacity = "1";
        prevTest.style.opacity = "1";
        h--;
    }
    if(h == 0){
        prevTest.style.opacity = "0.2";
    }
}

// Top rated slider 
let nextTop = document.getElementById("next-top");
let prevTop = document.getElementById("prev-top");
let topChild = document.getElementsByClassName("top_children");
let j = 0;
nextTop.onclick = function(){
    if(j < topChild.length-1){
        topChild[j+1].classList.add('show', 'right');
        topChild[j].classList.remove('show', 'right', 'left');
        nextTop.style.opacity = "1";
        prevTop.style.opacity = "1";
        j++;
    }
    if(j == topChild.length-1){
        nextTop.style.opacity = "0.2";
    }
}
prevTop.onclick = function(){
    if(j >= 1){
        topChild[j-1].classList.add('show', 'left');
        topChild[j].classList.remove('show', 'left', 'right');
        nextTop.style.opacity = "1";
        prevTop.style.opacity = "1";
        j--;
    }
    if(j == 0){
        prevTop.style.opacity = "0.2";
    }
}

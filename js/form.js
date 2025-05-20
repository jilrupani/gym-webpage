//variable
//first page
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");

//second page
const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

//third page
const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");

//second page
const thirdPrevBtn = document.querySelector(".prev-1");
const submitBtn = document.querySelector(".next-2");

//progress step
const progressStep = document.querySelectorAll(".register__progress--step");

//progress number (the span element)
const progressNumber = document.querySelectorAll(".register__progress-step span");

//progress tick mark
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

//the next button event listener function
function tick(){
    progressStep[current - 1].classList.add("active");
    progressNumber[current - 1].classList.add("active"); 
    progressTick[current - 1].classList.add("active"); 
    current += 1;
}

//the previous button event listener function
function untick(){
    progressStep[current - 2].classList.remove("active");
    progressNumber[current - 2].classList.remove("active"); 
    progressTick[current - 2].classList.remove("active"); 
    current -= 1;
}

//next btns events

//first next button event listener
firstNextBtn.addEventListener('click',() => {
    slidePage.style.marginleft = "-33%";
    tick();    
});

//second next button event listener
secondNextBtn.addEventListener('click',() => {
    slidePage.style.marginleft = "-100%";
    tick();    
});

//third next button event listener
thirdNextBtn.addEventListener('click',() => {
    slidePage.style.marginleft = "-200%";
    tick();
});

//submit button event listener
submitBtn.addEventListener('click',()=>{
    tick();
    setTimeout(() => {
        alert("Your Form Has Been Sucessfully Submitted, Thank You!");
        location.reload();
    }, 1000);
});

//previous btns events

//first previous button event listener
firstPrevBtn.addEventListener("click",() => {
    slidePage.style.marginleft="0";
   untick();
});

//second previous button event listener
secondPrevBtn.addEventListener("click",() => {
    slidePage.style.marginleft="-30%";
    untick();
});

//third previous button event listener
thirdPrevBtn.addEventListener("click",() => {
    slidePage.style.marginleft="-100%";
    untick();
});
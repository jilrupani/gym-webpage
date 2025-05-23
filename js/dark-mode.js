let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () =>{
    if(checkbox.checked){
        smoothTrans();
        htmlElement.setAttribute("data-theme","dark");
    } else{
        smoothTrans();
        htmlElement.setAttribute("data-item","light");
    }
});

let smoothtrans = () => {
    htmlElement.classList.add("transition");

    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
    },1000);
};
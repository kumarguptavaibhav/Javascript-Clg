let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    console.log("you clicked the button handler 1");
});
btn.addEventListener("click", ()=>{
    console.log("you clicked the button handler 2");
});
const handler3 = ()=>{
    console.log("you clicked the button handler 3");
}
btn.addEventListener("click", handler3);
btn.addEventListener("click", ()=>{
    console.log("you clicked the button handler 4");
});
btn.removeEventListener("click", handler3);

let head = document.querySelector("h2");
head.onmouseover = () => {
    console.log("You are on heading area");
}
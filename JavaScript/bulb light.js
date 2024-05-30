let btn = document.querySelector("#btn");

let currMode = "light"

btn.addEventListener("click", ()=>{
    if(currMode === "light"){
        document.querySelector("div").style.backgroundColor = "black";
        currMode = "dark"
    }
    else{
        document.querySelector("div").style.backgroundColor = "chartreuse";
        currMode = "light"
    }

    console.log(currMode);
})
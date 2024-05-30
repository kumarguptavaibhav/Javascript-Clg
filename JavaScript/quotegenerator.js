let quotes = [
    {
        text: "Hi",
        author: "Vaibhav",
    },
    {
        text: "Hi",
        author: "Anurag",
    },
    {
        text: "Hi",
        author: "Rishi",
    },
    {
        text: "Hi",
        author: "Bhavesh",
    },
    {
        text: "Hi",
        author: "Gobind",
    },
    {
        text: "Hi",
        author: "Uday",
    }
]

let author = document.querySelector("#Author");
let text = document.querySelector("#text");
function func(){
    let randomquote = quotes[Math.floor(Math.random()*quotes.length)];
    author.innerText = randomquote.text;
    text.innerText = randomquote.author;
}
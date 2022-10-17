const joke= document.getElementById('text')
const button= document.getElementById('btn')
const url= 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let getJoke= () =>{
    joke.classList.remove('fade')
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        joke.textContent= `${data.joke}`
        joke.classList.add('fade')
    })   
}
button.addEventListener('click', getJoke)

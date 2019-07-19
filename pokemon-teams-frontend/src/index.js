const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemon`

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage(){
    
    getTrainers()

}

function getTrainers(){
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(data => createTrainerList(data))
}


function getAllPokemon(){
    fetch(POKEMONS_URL)
    .then(res => res.json())
    .then(data => createPokemonList(data))
}

function createTrainerList(trainers){
    trainers.forEach(createTrainerCard)
}

// function createPokemonList(){

// }

function createTrainerCard(){
    const main = document.querySelector("main")

    const div = document.createElement("div")
    div.className = "card"

    const p = documents.createElement("p")
    p.innerText = trainer.name

    const ul = document.createElement("ul")
    trainer.pokemon.forEach(function(pokemon){
        let li = document.createElement('li')
        li.innerText = console.log(pokemon.name)
        ul.appendChild(li)
    })

    let realeaseBtn = document.create

}



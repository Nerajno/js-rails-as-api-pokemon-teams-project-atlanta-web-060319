const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemon`

document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage(){
    
    const div = document.createElement("div", className="card")

    const addPokeBtn = document.createElement("BUTTON", id="btn")

    const ul = document.createElement("ul")

    div.appendChild(addPokeBtn)
    div.appendChild(ul)
}


function getAllPokemon(){
    fetch(POKEMONS_URL)
    .then(res => res.json())
    .then(data => createPokemonList)
}
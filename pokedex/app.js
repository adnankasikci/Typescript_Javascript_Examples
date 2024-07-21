import { colors, pokedexURL } from "./constants.js";
import { Pokedex } from "./Pokedex.js";

const pokeContainer = document.querySelector(".cards");
const searchInput = document.querySelector("#pokemonSearch");
const pokedex = new Pokedex(pokedexURL);

window.addEventListener('load', loadNextPageAndRender);
document.querySelector(".loadButton").addEventListener("click", loadNextPageAndRender);


searchInput.addEventListener("input", () => {
    pokeContainer.innerHTML = "";
    pokedex.findPokemonsByName(searchInput.value).forEach(createPokemonBox);
});

async function loadNextPageAndRender() {
    const pokemons = await pokedex.getNextPage();
    pokemons.forEach(createPokemonBox);
}

function createPokemonBox(pokemon) {
    const { name, weight } = pokemon;
    const id = pokemon.id.toString().padStart(3, "0");
    const type = pokemon.types[0].type.name

    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    pokemonEl.style.backgroundColor = colors[type];
    pokemonEl.innerHTML = buildHtmlOfPokemon(id, name, weight, type)
    pokeContainer.appendChild(pokemonEl);
}

function buildHtmlOfPokemon(id, name, weight, type) {
    return `
    <img class="pokemonImage" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} Pokemon" />
    <h3 class="pokemonName">${name}</h3>
    <p class="pokemonId"># ${id}</p>
    <p class="pokemonWeight">${weight} kg</p>
    <p class="pokemonType">Type : ${type}</p>
    `
}
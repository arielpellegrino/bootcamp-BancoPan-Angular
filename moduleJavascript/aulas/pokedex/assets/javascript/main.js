const loadMoreButton = document.getElementById('loadMoreButton');
function convertPokemonToLi(pokemon) {
    return `
          <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}<span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
             <img src="${pokemon.photos}" alt="${pokemon.name}"/>
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
               
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')



function loadPokemonItens(offset, limit) {
    PokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

const limit = 5;
let offset = 0;

loadPokemonItens()
loadMoreButton.addEventListener('click', () =>{
    loadPokemonItens(offset, limit)
})

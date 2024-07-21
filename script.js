const pokemonList = document.getElementById('pokemon-list');

const pokemons = [
    { name: "Bulbasaur", id: 1, type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "Ivysaur", id: 2, type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { name: "Venusaur", id: 3, type: "Grass/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { name: "Charmander", id: 4, type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "Charmeleon", id: 5, type: "Fire", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { name: "Charizard", id: 6, type: "Fire/Flying", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { name: "Squirtle", id: 7, type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { name: "Wartortle", id: 8, type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { name: "Blastoise", id: 9, type: "Water", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { name: "Caterpie", id: 10, type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
    { name: "Metapod", id: 11, type: "Bug", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { name: "Butterfree", id: 12, type: "Bug/Flying", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { name: "Weedle", id: 13, type: "Bug/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
    { name: "Kakuna", id: 14, type: "Bug/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
    { name: "Beedrill", id: 15, type: "Bug/Poison", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
    { name: "Pidgey", id: 16, type: "Normal/Flying", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
    { name: "Pidgeotto", id: 17, type: "Normal/Flying", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { name: "Pidgeot", id: 18, type: "Normal/Flying", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
    { name: "Rattata", id: 19, type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
    { name: "Raticate", id: 20, type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" }
];

function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemon.image;
        pokemonImg.alt = pokemon.name;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.textContent = `ID: ${pokemon.id}`;

        const pokemonType = document.createElement('p');
        pokemonType.textContent = `Type: ${pokemon.type}`;

        pokemonCard.appendChild(pokemonImg);
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonId);
        pokemonCard.appendChild(pokemonType);

        pokemonList.appendChild(pokemonCard);
    });
}

displayPokemons(pokemons);

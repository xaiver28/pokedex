// pokemons= ()=> {
//
// fetch('https://fizal.me/pokeapi/api/v2/id/25.json')
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data)
//   let image = document.getElementById('Image')
//   image.src = data.sprites.front_shiny
//
//   let defense = document.getElementById('defense')
//   var hp= data.stats[5].base_stat
//   var def = data.stats[3].base_stat
//
//   defense.innerHtml=`Defense: ${def} hp:${hp}`
//   defense.style.color='skyblue'
//   defense.style.height='10px'
//   console.log(defense);
//
//
//
// })
// }
// pokemons()
const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 807; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
			hp: result.stats[5].base_stat,
			def: result.stats[3].base_stat,
			abi:result.abilities.ability,
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};


const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (load) => `
        <li class="grid">
            <img class="pokemonImage" src="${load.image}"/>
            <h3 class="pokemonName">${load.id}. ${load.name}</h3>
            <p class="Type">Type: ${load.type}</p>
			<p class= "HP">Hp: ${load.hp}</p>
			<p class= "Def">Def: ${load.def}</p>

			<p class="Abi">Abilities: ${load.Abi}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

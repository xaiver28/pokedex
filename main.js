pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/25.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let image = document.getElementById('Image')
  image.src = data.sprites.front_shiny
  let defense = data.stats[3].base_stat
  console.log(defense);


})
}
pokemons()

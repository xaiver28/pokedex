pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/25.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let image = document.getElementById('Image')
  image.src = data.sprites.front_shiny

  let defense = document.getElementById('defense')
  var hp= data.stats[5].base_stat
  var def = data.stats[3].base_stat

  defense.innerHtml=`Defense: ${def} hp:${hp}`
  defense.style.color='skyblue'
  defense.style.height='10px'
  console.log(defense);



})
}
pokemons()

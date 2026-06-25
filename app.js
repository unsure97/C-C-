async function searchPokemon() {
  const name = document.getElementById("search").value.toLowerCase();

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <p>Types: ${data.types.map(t => t.type.name).join(", ")}</p>
  `;
}
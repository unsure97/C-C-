async function searchPokemon() {
  const name = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!name) {
    resultDiv.innerHTML = "Please enter a Pokémon name.";
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      resultDiv.innerHTML = "Pokémon not found.";
      return;
    }

    const data = await res.json();

    resultDiv.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" />

      <p><b>Height:</b> ${data.height}</p>
      <p><b>Weight:</b> ${data.weight}</p>

      <p><b>Types:</b> ${data.types.map(t => t.type.name).join(", ")}</p>

      <h3>Base Stats</h3>
      <ul>
        ${data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("")}
      </ul>
    `;

  } catch (error) {
    resultDiv.innerHTML = "Error loading Pokémon data.";
  }
}
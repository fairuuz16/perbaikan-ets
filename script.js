const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      display(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

function display(pokemonArray) {
  for (let i = 0; i < 20; i++) {
    const nama = document.getElementById(`nama${i + 1}`);
    nama.textContent = pokemonArray[i].name.charAt(0).toUpperCase() + pokemonArray[i].name.slice(1);
    nama.classList.add("card-name");
  }
}


getData();

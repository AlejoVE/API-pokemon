import { Pokemon } from './pokemon.js';

const init = () => {
	const buttonEl = document.getElementById('catchButton');
	buttonEl.addEventListener('click', (event) => {
		event.preventDefault();
		const pokemonId = document.getElementById('pokeId').value;
		const pokemon = new Pokemon();
		pokemon.getPokemon(pokemonId).then(() => {
			let container = pokemon.render();
			let divEl = document.getElementById('root');
			divEl.appendChild(container);
		});
	});
};

init();

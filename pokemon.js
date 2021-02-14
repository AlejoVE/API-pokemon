class Pokemon {
	constructor(id, name, img) {
		this.id = id;
		this.name = name;
		this.img = img;
		this.isShowingFront = false;
	}

	getPokemon(pokemonId) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then((res) => res.json())
			.then((data) => {
				this.id = data.id;
				this.name = data.name;
				this.img = data.sprites.front_default;
				return data;
			})
			.catch((error) => console.log('no se pudo hacer fetch', error));
	}

	render() {
		let container = document.createElement('div');
		container.id = this.id;

		let uEl = document.createElement('ul');
		uEl.innerHTML = `<ul>
    <li><h3>Name: ${this.name}</h3></li>
    <li> ID: ${this.id}</li>
    </ul>`;

		let imgEl = document.createElement('img');
		imgEl.src = this.img;
		imgEl.addEventListener('click', () => {
			this.changeForm();
			imgEl.src = this.img;
		});

		container.appendChild(uEl);
		container.appendChild(imgEl);
		return container;
	}

	changeForm() {
		if (this.isShowingFront === false) {
			this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.id}.png`;
			this.isShowingFront = true;
		} else {
			this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.id}.png`;
			this.isShowingFront = false;
		}
	}
}
export { Pokemon };

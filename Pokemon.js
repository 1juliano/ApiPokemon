function abrirPokedex() {
    document.getElementById("pokedex").classList.add("show");
}

function buscarPokemon() {
    let nome = document.getElementById("pokemon").value.toLowerCase();

    if (!nome) {
        alert("Digite um Pokémon!");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("img").src = data.sprites.front_default;
            document.getElementById("nome").innerText = data.name.toUpperCase();
            document.getElementById("tipo").innerText = data.types.map(t => t.type.name).join(", ");
            document.getElementById("altura").innerText = data.height;
            document.getElementById("peso").innerText = data.weight;

        })
        .catch(() => {
            alert("Pokémon não encontrado!");
        });
}
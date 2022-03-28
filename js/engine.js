var number = 0;
var pad_search = false;

const fetch_pokemon = ()=> {
    const pokemon_input_name = document.getElementById("pokemon_input_name");
    let name_input = 0;
    name_input = pokemon_input_name.value.toLowerCase();

    if(name_input) {
        const url = `https://pokeapi.co/api/v2/pokemon/${name_input}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            $('#name').text(`#${data.id} ${data.name.toUpperCase()}`);
            $('#type_info').text(data.types[0].type.name.toUpperCase());
            pad_search = false;
            number = data.id;
            pokemon_image(data.sprites.front_default);
            poke_info(data.stats);
            abilities(data.abilities);
            moves(data.moves);
        })
    }
}

const pokemon_image = (url)=>{
    const poke_img = document.getElementById("pokemon_image")
    poke_img.src   = url
}


const poke_info = (stats) => {
    $('#hp').text(`PS: ${stats[0].base_stat}`);
    $('#atk').text(`ATQ: ${stats[1].base_stat}`);
    $('#def').text(`DEF: ${stats[2].base_stat}`);
    $('#speed').text(`VEL: ${stats[5].base_stat}`);
    $('.basic_info').show();
}



$('#pokemon_input_name').on('keyup', function(event) {
    if(event.keyCode === 13){
        fetch_pokemon();
    }
});


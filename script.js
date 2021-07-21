// Função auxiliar ---------------------------------------------------------------
function file_into_string( path ){
	return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut aliquam sapien. Quisque eros tortor, bibendum et tempor eget, laoreet at risus. Suspendisse commodo massa orci, at ultricies tellus lobortis vel. Aliquam bibendum sagittis leo ac pellentesque. Duis gravida lorem et ligula pharetra, in eleifend diam euismod. Cras dolor odio, scelerisque iaculis ipsum a, accumsan porta dui. Etiam at nulla sodales, luctus arcu ut, pretium orci. Maecenas eleifend suscipit justo vel luctus. Sed vitae augue orci. Morbi ipsum quam, rhoncus ac laoreet non, dapibus id massa. Cras congue, risus eget sollicitudin iaculis, ipsum justo tristique odio, convallis placerat libero enim eget tellus. Nullam eu faucibus tellus.";
}
// Constructor Function ----------------------------------------------------------

function Culinaria ( nome, desc, foto ){
	
	this.foto = foto;
	this.nome = nome;
	this.desc = file_into_string( desc );

	// Atributo formatado --------------------------------------------------------
	
	this.get_card = function(){
		
		let s = `
		<div class = "card mb-4 border-primary">
			<div class = "card-body">
				<div class = "text-center">
					<img src="${this.foto}" alt ="${this.nome}" width = 500 height = 400>
					<h5 class ="card-title">${this.nome}</h5>
				</div>
				<p class="card-text text-justify">${this.desc}</p>
				<button type="button" class="btn btn-outline-primary mr-auto">Restaurantes<button>
				<button type="button" class="btn btn-outline-primary ml-auto">Receitas<button>
			</div>
		</div>
		`;
		return s;
	}
}

let to_cularr = function( lst ){
	let result = [];
	for( let item of lst )
		result.push( new Culinaria( item.nome, item.desc, item.foto ) );
	return result.map( m => m.get_card() );
}

// Unindo os cards num unico container -------------------------------------------
let merge_cards = function( card_array ){
   
	// ----------------------------------------------------------------------------
	// dois cards por linha, se o numero de cards for impar, o card sobrando ficará
	// sozinho em uma linha
	// ----------------------------------------------------------------------------

	let m = card_array.length;
	let inner_div = "";
	let card1 , card2;
	for( let i = 0; i < Math.floor( m/2 ); i++ ){
		
		card1 = card_array[ 2*i ];
		card2 = card_array[ 2*i + 1 ];

		inner_div += `
		<div class = "row px-2">
			<div class = "col px-2">
				${ "\t" + card1}
				${ "\t" + card2}
			</div>
		</div>
		`;
	}if( m%2 === 1 ){
		card1 = card_array[ -1 ];
		inner_div += `
		<div class = "row px-2">
			<div class = "col px-2">
				    ${ "\t" + card1}
			</div>
		</div>
		`;
	}

	let result =`
	<div class = "container" >
		${"\t" + inner_div}
	</div>
	`;

	return result;
}
	
// Lista de objetos --------------------------------------------------------------

let culinaria_arr = [
	{nome:"Russia", foto:"assets/russia/thumbnail.png", desc:"assets/russia/Intro.txt"},
	{nome:"Armênia", foto:"assets/armenia/thumbnail.png", desc:"assets/armenia/Intro.txt"},
	{nome:"Hungria", foto:"assets/hungria/thumbnail.png", desc:"assets/hungria/Intro.txt"},
	{nome:"Polônia", foto:"assets/polonia/thumbnail.png", desc:"assets/polonia/Intro.txt"}
];

let rec_arr = to_cularr( culinaria_arr );
// for( let item of rec_arr )
// 	console.log( item );

const div = merge_cards( rec_arr );
// console.log( div );

$("body").append( div );

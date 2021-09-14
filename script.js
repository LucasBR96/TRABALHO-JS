// Função auxiliar ---------------------------------------------------------------
function file_into_string( path ){
	return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut aliquam sapien. Quisque eros tortor, bibendum et tempor eget, laoreet at risus. Suspendisse commodo massa orci, at ultricies tellus lobortis vel. Aliquam bibendum sagittis leo ac pellentesque. Duis gravida lorem et ligula pharetra, in eleifend diam euismod. Cras dolor odio, scelerisque iaculis ipsum a, accumsan porta dui. Etiam at nulla sodales, luctus arcu ut, pretium orci. Maecenas eleifend suscipit justo vel luctus. Sed vitae augue orci. Morbi ipsum quam, rhoncus ac laoreet non, dapibus id massa. Cras congue, risus eget sollicitudin iaculis, ipsum justo tristique odio, convallis placerat libero enim eget tellus. Nullam eu faucibus tellus.";
}
// Constructor Function ----------------------------------------------------------

function Culinaria ( nome, desc, foto, pais ){
	
	this.foto = foto;
	this.nome = nome;
	this.desc = desc;
	this.pais = pais;

	// Atributo formatado --------------------------------------------------------
	
	this.get_card = function(){
		
		let s = ``;
		return s;
	}
}

let to_cularr = function( lst ){
	let result = [];
	for( let item of lst )
		result.push( new Culinaria( item.nome, item.desc, item.foto , item.pais) );
	return result.map( m => m.get_card() );
}

// Unindo os cards num unico container -------------------------------------------
let merge_cards = function( card_array ){
	let result = card_array.join("\n")
	return "<div class = \"row\" >\n" + result + "\n<\/div>";
}

$( document ).ready( function(){

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
} )

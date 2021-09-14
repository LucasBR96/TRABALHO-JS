// Constructor Function ----------------------------------------------------------

function Receita ( nome, desc, foto, pais ){
	
	this.foto = foto;
	this.nome = nome;
	this.desc = desc;
	this.pais = pais;

	// Atributo formatado --------------------------------------------------------
	
	this.get_card = function(){
		
		let s = `
		<div class = "col-md-6 col-12 my-2">
			<div class = "card text-center border-primary" style = "height: 100%">
				<div class = "card-header text-danger" style = "background-color: rgb( 255 , 255 , 255 )">
					<h4>${ this.nome }</h4>
					<h5 class = "cul" >${ this.pais }</h5>

				</div>
				<div class = "card-body pb-0">
					<img src = "${ this.foto }"
					style = "width: 100%; height : 80%">
					<p class = "text-justify-center mt-3">
						${ this.desc }
					</p>
				</div>
				<div class = "card-footer" style = "background-color: rgb( 255 , 255 , 255 )" >
					<button type = "button" 
					class = "btn"
					style = "color :rgb(0, 50, 160) ; border-color: rgb(0, 50, 160)">
						confira </button>
				</div>
			</div>
		</div>
		`
		return s;
	}
}

let to_cularr = function( lst ){
	let result = [];
	for( let item of lst )
		result.push( new Receita( item.nome, item.desc, item.foto , item.pais) );
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
		{
			nome:"Borscht" , pais:"Russia", foto:"assets/russia/thumbnail.png",     
			desc:"Uma tradicional sopa russa de beterraba, feita com um caldo de costela caseiro e servida com <i>Smetana<\/i>."
		},{
			nome:"Tan apur" , pais:"Armênia", foto:"assets/armenia/thumbnail.png",  
			desc:"Um caldo feito a base de Iogurte natural. Leva trigo em grão, menta e cebola. Uma boa pedida vegetariana."
		},{
			nome:"Paprikash" , pais:"Hungria", foto:"assets/hungria/thumbnail.png", 
			desc:"Cortes de frango assado sob um molho de paprica picante. Acompanha <i>Gnocci</i> italiano."
		},{
			nome:"Zurek" , pais:"Polônia", foto:"assets/polonia/thumbnail.png",     
			desc:"Essa sopa é semelhante à japonesa <i>Miso<\/i> ao usar uma pasta de grão fermentada como base. Invés de soja, a polonesa usa centeio, conferindo leve acidez e cremosidade."
		}
	];
	
	let rec_arr = to_cularr( culinaria_arr );
	// for( let item of rec_arr )
	// 	console.log( item );
	
	const div = merge_cards( rec_arr );
	// console.log( div );
	
	$("#receitas-cards").append( div );
} )

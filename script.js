// Constructor Function ----------------------------------------------------------

function Receita(nome, igredientes, preparo, foto ){
	
	this.igredientes = igredientes; 
	this.preparo     = preparo; 
	this.foto        = foto;
	this.nome        = nome;
	
	// Atributo formatado --------------------------------------------------------
	this.get_igredientes = function(){
		
		let s = "";
		let igred_lst = igredientes.split(";"); 
		
		let count = 0;
		for( let linha of igred_lst )
			s += ++count + ". " + linha + "\n";
		s += "\n-------------------------";

		return s
	}
}

// Lista de objetos --------------------------------------------------------------

let receita1 = { 
	nome: "Borscht",
	foto: "assets/borscht.jpg",
	igredientes: "3 Beterrabas;1 folha de Louro;Meia Cabeça de repolho fatiada;1 Cebola grande;3 Cenouras;Meio Kg. de Carne de costela;3 dentes de alho;1 Nabo;Dill;Smetana",
	preparo: "Limpe o excesso de gordura da carne de costela e fatie a banha resultante, guarde metade para fazer outras receitas. Açenda uma panela de pressão em fogo alto e quando ela estiver bem quente jogue a gordura. Ao passo que a gordura derrete pique a cebola em cubos médios, as cenouras em rodelas grosseiras e corte o nabo em dois. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc nisl, rhoncus nec nisl eget, volutpat pellentesque mauris. Duis condimentum pharetra interdum. Praesent lectus arcu, vehicula eget magna at, dictum accumsan mi. Vestibulum at ornare ligula, nec condimentum eros. Vestibulum ornare semper neque eu interdum. Duis leo lacus, tincidunt in porta ut, vehicula a dolor. Morbi tristique odio at orci tristique sodales. Vestibulum ut tempor leo. Sed sit amet ante vel ante auctor placerat ac in elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Desculpe professor se eu escrever a receita toda vai sair do foco do trabalho iso velit. Praesent nec scelerisque est. Donec id viverra risus."};


let receita2 = { 
	nome: "Tan apur",
	foto: "assets/tan_apur.jpg",
	igredientes: "350 ml de iogurte natural sem açucar;150ml de caldo de frango;1 ovo caipira;200 gramas de trigo em grão;salsinha, cebolinha e hortelã fatiado;bacon em cubinhos( opcional )",
	preparo: "Recomendamos que você faça seu iogurte e, pricipalmente, seu caldo de frango em casa, o proprio site ja têm receita de ambos. Deixe o trigo de molho na noite anterior e o cozinhe por 15 minutos na panela de pressão no fogo médio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor vitae enim eleifend mattis. Etiam rutrum neque id dolor tristique tincidunt. Proin vel diam dui. Morbi lectus urna, varius quis metus id, dapibus vestibulum arcu. Nunc nec auctor mauris. Aliquam erat volutpat. Nullam auctor purus tortor, quis malesuada lorem sodales et. Sed dolor nunc, hendrerit quis ligula quis, pharetra auctor mi. Sed ornare et ante at sollicitudin. Proin vitae eleifend felis, nec malesuada lacus. Fusce sed ultricies diam. Aliquam neque tellus, faucibus ut luctus id, ullamcorper a eros. Morbi vulputate viverra purus, sit amet fringilla eros volutpat sed. "};

let receita_arr = [ receita1 , receita2 ];

// Função geradora de objetos Receita --------------------------------------------

gera_receita = function( receita_seq ){
	let objrec_seq = [];
	for( let rec of receita_seq ){
		let receita = new Receita( rec.nome, rec.igredientes, rec.preparo, rec.foto );
		objrec_seq.push( receita );
	}
	return receita_seq;
}




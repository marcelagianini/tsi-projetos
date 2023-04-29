	var strCPF = document.getElementById("cpf") 

function verificacaoCPF (){
var cpfVerificar = strCPF.value.replace(".","").replace(".","").replace("-","");
var identCPF = cpfVerificar.slice(0,9)

if (cpfVerificar.length != 11){
	alert("CPF deve ter 11 dígitos.")
	return;
}

if (strCPF.value.includes(".") || strCPF.value.includes("-")){
	alert("CPF só pode ter números, caracteres são inválidos.");
	return;

}


primeiro_digito = calculaDV(identCPF);
segundo_digito = calculaDV(identCPF * 10 + primeiro_digito);
var novoCPF = cpfVerificar.concat(primeiro_digito,segundo_digito);

if(cpfVerificar != novoCPF){
		alert("Digitos de verificação inválidos.");
	return;

}

}

function calculaDV(num)
{
var resto = 0, soma = 0;
for (i = 2; i < 11; i++)
{
soma = soma + ((num % 10) * i);
num = parseInt(num / 10);
}
resto = (soma % 11);
return (resto > 1) ? (11 - resto) : 0;
}



/*parte2 */

var maquinas1 = document.getElementById("maquinas") 
var saches1 = document.getElementById("saches")
var textarea = document.getElementById("textarea2")
var inputValor = document.getElementById("valor-total")

function maquinasForm(){

	textarea.value += maquinas1.value+"\n"; 

	if(maquinas1.value=="piccolo"){
		
		inputValor.value = Number(inputValor.value) +  340 ;
	}
	if(maquinas1.value=="inissia"){
	
		inputValor.value = Number(inputValor.value) +  300 ;
	}
	
	if(maquinas1.value=="uc50"){

		inputValor.value = Number(inputValor.value) + 400 ;

	}

	if(maquinas1.value=="classico"){
		inputValor.value = Number(inputValor.value) + 230 ;
	}

}

function sachesForm(){

	textarea.value += saches1.value+"\n";

	if(saches1.value=="expresso"){
		
		inputValor.value = Number(inputValor.value) +  24 ;
	}

	if(saches1.value=="descafeinado"){
		
		inputValor.value = Number(inputValor.value) +  21 ;
	}

	if(saches1.value=="livanto"){
		
		inputValor.value = Number(inputValor.value) +  35 ;
	}
	

	if(saches1.value=="ristretto"){
		
		inputValor.value = Number(inputValor.value) +  42 ;
	}

	if(saches1.value=="vanillo"){
		
		inputValor.value = Number(inputValor.value) +  21 ;
	}

	if(saches1.value=="classico"){
		
		inputValor.value = Number(inputValor.value) +  14 ;
	}

	if(saches1.value=="intenso"){
		
		inputValor.value = Number(inputValor.value) +  14 ;
	}




}

function botaoRemover(){

	textarea.value = "";
	inputValor.value ="";

}

/* parte 3 */

var cartaoNum = document.getElementById("numero-cartao") 

function cartoesValida() { 
	if(cartaoNum.value != 3 && cartaoNum.value != 4 && cartaoNum.value !=5)
	{
		alert("Cartão invalido!");
		return;
	}

	var visaCartao = document.getElementById("cartaoVisa") 

	if(cartaoNum.value == "4"){
		visaCartao.setAttribute("checked", true);
		return; 

	}


}



console.log(onkeyup)
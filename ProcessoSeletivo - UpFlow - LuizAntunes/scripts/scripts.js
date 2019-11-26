function clique_botao() {
	document.getElementById("newInputs").innerHTML = "";
	var numero = document.forms['form']['inputNumero'].value;
	
	//Valida se campo é diferente de nulo
	//Caraceres não numéricos são tratados pelo próprio HTML5
	if (numero == "" || numero < 1) {
		alert("Insira o campo corretamente");
		document.forms['form']['inputNumero'].focus();

		return false;
	} else {
		//Loop de criação de inputs. De acodo com a quantidade que o usuário digitou
		for (var i = 0; i < numero; i++) {
			var input = document.createElement("input");
			input.name = "input";
			input.type = "number";

			document.getElementById("newInputs").appendChild(input);
			//document.getElementById("newInputs").appendChild(document.createElement("br"));
		}

		//Cria o botão para fazer a soma
		var button = document.createElement("input");
		button.name = "newInputSubmit";
		button.type = "button";
		button.value = "Somar"
		button.onclick = function() {
			soma_campos();
		}

		document.getElementById("newInputs").appendChild(document.createElement("br"));
		document.getElementById("newInputs").appendChild(button);

		return true;
	}
}

function soma_campos() {
	var div = document.getElementById("newInputs");
	var input = document.getElementsByName("input");

	var soma = 0;

	for (var i = 0; i < input.length; i++) {
		//Verifica se cada campo é nulo
		//Caraceres não numériscos são tratados pelo próprio HTML5
		if (input[i].value == "") {
			//tratamento de erro
			//Caso o campo esteja vazio faz o foco para o usuário qual campo está sem preencher
			alert("Prencha os dados corretamente!");


			input[i].focus();

			return false;
		} else {
			//Caso o campo esteja preenchido corretamente
			soma += parseInt(input[i].value);
		}
	}

	alert("Soma: " + soma);

	return true;
}

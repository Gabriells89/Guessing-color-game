//Selecionando o espaço do H1:
var h1 = document.querySelector("h1");
//Criando um valor Default para Número de Quadrados:
var numSquares = 6;
//Gerando Cores Aleatórias:
var colors = [];
//Escolhendo uma cor:
var pickedColor;
//Linkando o span à cor escolhida:
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//Selecionando os quadrados:
var squares = document.querySelectorAll(".square");
//Selecionando mensagem:
var messageDisplay = document.querySelector("#message");
//Criando os Botões de Dificuldade:
var modeButtons = document.querySelectorAll(".mode");
//Criando o Botão Reset:
var resetBtn = document.getElementById("resetBtn");

//Função de Início:
function init() {
	//Botões de Dificuldade:
	setModeBtn();
	//Código para assimilar uma cor a cada quadrado:
	setSquares();
	//Resetando tudo pra carregar corretamente:
	reset();
}

//Função para os Níveis de Dificuldade:
function setModeBtn() {
	for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			//Mudando o número de quadrados de acordo com a dificuldade:
			this.textContent === "Fácil" ? numSquares = 3:numSquares = 6;
			reset();
		});
	}	
}
	
//Código para setar os quadrados:
function setSquares() {
	for(i = 0; i < squares.length; i++){
		//Adicionando os Eventos:
		squares[i].addEventListener("click", function(){
			//Selecionando a cor do quadrado:
			var clickedColor = this.style.backgroundColor;
			//Comparando as cores:
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Acertou! Parabéns!";	
				changeColor(clickedColor);
				//Mudando o fundo para a Cor Escolhida:
				h1.style.backgroundColor = clickedColor;
				//Mudando escrita do botão:
				resetBtn.textContent = "Jogar de Novo?"
			} 
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Errou! Tente novamente!";
			}
		});
	}
}

//Código de Reset:
function reset() {
	colors = generateRandomColors(numSquares);
	//Escolher uma nova cor:
	pickedColor = colors[randomNumber(colors)];
	//Mudar o código RGB para a nova cor:
	colorDisplay.textContent = pickedColor;
	//Mudar as cores dos quadrados:
	for(i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//Estilização:
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "Novas Cores";
	messageDisplay.textContent = "";	
}

//Função para escolher um número aleatório de acordo com o tamanho da array:
function randomNumber(arr) {
	var random = Math.floor(Math.random() * arr.length);
	return random;
}

//Função para mudar as cores dos quadrados quando acerta:
function changeColor(color){
	//looping pelos quadrados:
	for(i = 0; i < squares.length; i++) {
		//mudando cada cor:
		squares[i].style.backgroundColor = color;
	}
}

//Gerando a array com as strings de cores dentro:
function generateRandomColors(num) {
	//Criar uma array:
	var arr = [];
	//Adicionar números aleatórios à array:
	for(var i = 0; i< num; i++) {
		//Pegar cor aleatória e jogar na array:
		arr.push(randomColor())
	}
	//Retornar a array:
	return arr;
}

//Função específica para gerar as cores no formato rgb:
function randomColor(){
	//Escolher vermelho (0-255):
	var r = Math.floor(Math.random()*256);
	//Escolher verde (0-255):
	var g = Math.floor(Math.random()*256);
	//Escolher azul (0-255):
	var b = Math.floor(Math.random()*256);
	//Criando o formato "rgb(r, g, b)":
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Botão Reset:
resetBtn.addEventListener("click", function() {
	reset();
});

init();



// задача состоит в том чтобы все строки преобразовать таким образом, чтобы каждое слово начиналось с заглавной буквы

String.prototype.toJadenCase = function ucFirst() {
	return this.split(" ").map((str) => str[0].toUpperCase() + str.slice(1))
		.join(" ")
}
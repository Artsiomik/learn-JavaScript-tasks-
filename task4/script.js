
// задача — вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.

function getMiddle(s) {
	let str = s;
	while (str.length > 2) {
		str = str.substr(1, str.length - 2);
	}
	return str;
}
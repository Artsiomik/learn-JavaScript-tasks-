
// Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.

function maskify(cc) {
	return cc.slice(-4).padStart(cc.length, '#');
}
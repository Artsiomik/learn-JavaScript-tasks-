
// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

function disemvowel(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	return str.split('').reduce(
		(acc, char) => {
			if (!vowels.includes(char.toLowerCase())) {
				return acc + char;
			}
			return acc;
		},
		''
	)
}
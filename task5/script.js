
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// Примечания:
// Все номера действительны , подтверждать их Int32не нужно .
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.

function highAndLow(numbers){
	const arr = numbers.split(' ').sort((a, b) => a - b);
	return `${arr[arr.length - 1]} ${arr[0]}`; 
	
 }
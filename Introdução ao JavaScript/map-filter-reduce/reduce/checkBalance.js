const myItems = [
	{
		price: 10,
		name: 'maçã',
	},
	{
		price: 30,
		name: 'roupa',
	},
	{
		price: 30,
		name: 'carne',
	},
];

const myValue = 100;

function checkBalance(items, value) {
  if (!items || !items.length, !value) return 'Envie todos os parâmetros';

  const balance = items.reduce((acc, item) => acc - item.price, value);
	return `O saldo final será de ${balance} reais`;
}

console.log(checkBalance(myItems, myValue));
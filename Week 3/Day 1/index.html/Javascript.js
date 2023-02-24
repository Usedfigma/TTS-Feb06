let billamount = 99.99;

function gratuity(){
	return (billamount * 0.2);
}
console.log(gratuity(100, 0.2));
function totalwithgrat(amount){
	return (gratuity + amount);
}

console.log(
	'your total,' including gratuity is :\
	$${totalwithgrat (billamount) .toFixed(2)}'
);
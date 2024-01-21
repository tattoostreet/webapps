$(".intro").prepend("<h1>rgb(255, 255, 255)</h1>");


function generateRandomNumber(number) {
    number = Math.random() * number;
    return Math.floor(number) + 1;
}

function fetchKanyeQuote() {
	fetch(`https://api.kanye.rest/`)
	.then(res => res.json())
	.then(data => $(".quote").text(data.quote));
}

$("button").click(function() {

	let rgbArray = [];

	for (let i = 0; i < 3; i++) {
		rgbArray.push(generateRandomNumber(255));
	}

	$("div").css("background-color", `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}`);


	$("h1").text(`rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`);
	
	fetchKanyeQuote();

});
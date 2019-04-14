const anyWarm = [ `#ff0000`, `#ff0080`, `#ff8000`, `#FFDEAD`, `#FF7F50`, `#CD5C5C`, `#D8BFD8`, `#FF1493`, `#B22222`, `#FF00FF`, `#F5DEB3`, `#EE82EE`, `#FFE4E1`, `#FFEBCD`, `#F08080`, `#DB7093`, `#FF69B4`, `#BA55D3`, `#FFC0CB`, `#DC143C`, `#FF6347`, `#800000`, `#E9967A`, `#D2691E`, `#A0522D`, `#BC8F8F`, `#9932CC`];

const anyWarm2 = [ `#ff0000`, `#ff0080`, `#ff8000`, `#FFDEAD`, `#FF7F50`, `#CD5C5C`, `#D8BFD8`, `#FF1493`, `#B22222`, `#FF00FF`, `#F5DEB3`, `#EE82EE`, `#FFE4E1`, `#FFEBCD`, `#F08080`, `#DB7093`, `#FF69B4`, `#BA55D3`, `#FFC0CB`, `#DC143C`, `#FF6347`, `#800000`, `#E9967A`, `#D2691E`, `#A0522D`, `#BC8F8F`, `#9932CC`];

const anyCool = [ `#00BFFF`, `#0000FF`, `#00FFFF`, `#7FFFD4`, `#40E0D0`, `#48D1CC`, `#00FFFF`, `#00CED1`, `#5F9EA0`, `#B0E0E6`, `#87CEEB`, `#87CEFA`, `#4682B4`, `#1E90FF`, `#6495ED`, `#4169E1`, `#191970`, `#000080`, `#00008B`, `#0000CD`, `#7B68EE`, `#15BAC6`, `#158FC6`, `#1B15C6`, `#3029F9`, `#4C29F9`, `#520AF8`, `#7243DE`, `#009BFE`, `#155177`, `#04E6F6`];

const anyCool2 = [ `#00BFFF`, `#0000FF`, `#00FFFF`, `#7FFFD4`, `#40E0D0`, `#48D1CC`, `#00FFFF`, `#00CED1`, `#5F9EA0`, `#B0E0E6`, `#87CEEB`, `#87CEFA`, `#4682B4`, `#1E90FF`, `#6495ED`, `#4169E1`, `#191970`, `#000080`, `#00008B`, `#0000CD`, `#7B68EE`, `#15BAC6`, `#158FC6`, `#1B15C6`, `#3029F9`, `#4C29F9`, `#520AF8`, `#7243DE`, `#009BFE`, `#155177`, `#04E6F6`];

const anyZesty = [ `#DAA520`, `#FFD700`, `#F0E68C`, `#FFFACD`, `#EEE8AA`, `#BDB76B`, `#FFFF00`, `#FAFAD2`, `#00FFFF`, `#00FFB9`, `#1CD9A5`, `#25E857`, `#07FA03`, `#03FAA0`, `#03FADC`, `#24AF6C`, `#9AC817`, `#C0F32F`, `#D8FA76`, `#BEFA76`, `#93FA76`, `#76FA76`, `#24C724`, `#E3FF4F`, `#B5D413`, `#D2D413`, `#A7D413`, `#CDEC65`, `#65ECB5`, `#65ECD3`, `#14FFD3`, `#06DBB3`, `#6DF3FF`, `#97EEF6`, `#97F6DD`];

const anyZesty2 = [`#DAA520`, `#FFD700`, `#F0E68C`, `#FFFACD`, `#EEE8AA`, `#BDB76B`, `#FFFF00`, `#FAFAD2`, `#00FFFF`, `#00FFB9`, `#1CD9A5`, `#25E857`, `#07FA03`, `#03FAA0`, `#03FADC`, `#24AF6C`, `#9AC817`, `#C0F32F`, `#D8FA76`, `#BEFA76`, `#93FA76`, `#76FA76`, `#24C724`, `#E3FF4F`, `#B5D413`, `#D2D413`, `#A7D413`, `#CDEC65`, `#65ECB5`, `#65ECD3`, `#14FFD3`, `#06DBB3`, `#6DF3FF`, `#97EEF6`, `#97F6DD`];

// random number generator
const randomNumber = (number) => {
        return Math.floor(Math.random() * number);
      }

// random warm colour generator
const randomColour = (anyWarm) => {
	const i = randomNumber(anyWarm.length);
	const colours = anyWarm[i];
	return colours;
}

const randomColour2 = (anyWarm2) => {
	const i = randomNumber(anyWarm2.length);
	const colours = anyWarm2[i];
	return colours;
}

// random cool colour generator
const randomCoolColour = (anyCool) => {
	const i = randomNumber(anyCool.length);
	const coloursCool = anyCool[i];
	return coloursCool;
}

const randomCoolColour2 = (anyCool2) => {
	const i = randomNumber(anyCool2.length);
	const coloursCool = anyCool2[i];
	return coloursCool;
}

// random zesty colour generator
const randomZestyColour = (anyZesty) => {
	const i = randomNumber(anyZesty.length);
	const coloursZesty = anyZesty[i];
	return coloursZesty;
}

const randomZestyColour2 = (anyZesty2) => {
	const i = randomNumber(anyZesty2.length);
	const coloursZesty = anyZesty2[i];
	return coloursZesty;
}

// User clicks on 'show me the gradient'
$(function() {

// Warm colour generator
	$(`.warmWrapper button`).on(`click`, () => {
		const colours = randomColour(anyWarm);
		const colours2 = randomColour2(anyWarm2);
		$(`div.warmWrapper`).css({"background-image": `linear-gradient(to right, ${colours}, ${colours2}`}).fadeIn( "slow", function() {
  	});
		$(`.warmLeft`).html(`<h2>${colours}</h2>`);
		$(`.warmRight`).html(`<h2>${colours2}</h2>`);
	});

// Cool colour generator
	$(`.coolWrapper button`).on(`click`, () => {
		const colours = randomCoolColour(anyCool);
		const colours2 = randomCoolColour2(anyCool2);
		$(`div.coolWrapper`).css({"background-image": `linear-gradient(to right, ${colours}, ${colours2}`}).fadeIn( "slow", function() {
  	});
		$(`.coolLeft`).html(`<h2>${colours}</h2>`);
		$(`.coolRight`).html(`<h2>${colours2}</h2>`);
	});

// Zesty colour generator
	$(`.zestyWrapper button`).on(`click`, () => {
		const colours = randomZestyColour(anyZesty);
		const colours2 = randomZestyColour2(anyZesty2);
		$(`div.zestyWrapper`).css({"background-image": `linear-gradient(to right, ${colours}, ${colours2}`}).fadeIn( "slow", function() {
  	});
		$(`.zestyLeft`).html(`<h2>${colours}</h2>`);
		$(`.zestyRight`).html(`<h2>${colours2}</h2>`);
	});

// Smooth jump
	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top,},
		  200, 'linear')
	  });

// Click to copy (in progress)
	//   $(function() {
	// 	  $(`.allowCopy`).on(`click`, function() {
	// 		const colours = randomZestyColour(anyZesty);
	// 		$(this).focus();
	// 		$(this).select();
	// 		document.execCommand(`copy`);
	// 	  });
	//   });

}); // function end

// })
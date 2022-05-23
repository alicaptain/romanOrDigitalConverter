'use strict';




// ERRORS //
const errors = (note) => {
	console.log(`ERROR: ${note}`);

	output.textContent = `ERROR: ${note}`;
	output.style.color = 'var(--col-text)';
}



// === ROMAN TO DIGIAL === //
const romanToDigital = (userValue) => {
	let len = userValue.length;

	// ROMAN FILTERS
	// a) figure filter
	const checkRomanInput = (inputRoman) => {
		const defaultRomanFigures = 'IVXLCDM';
		for(let i = 0; i < len; i++) {
			if (!defaultRomanFigures.includes(inputRoman[i])) {
				errors(`Looks like there is an invalid figure: ${inputRoman[i]}`)
				return false;
			};
		}; 	return true; 
	};

	// b) roman numeral filter (roman rules filter)
	const romanRulesInspector = (userValue) => {
		for (let i = 0; i < len; i++) {
			if (userValue[i] == 'V' && userValue[i + 1] == 'V') {
				return (false, errors(`Figure 'V' can't be used twice in Roman Numbers.`));
			} else if (userValue[i] == 'L' && userValue[i + 1] == 'L') {
				errors(`Figure 'L' can't be used twice in Roman Numbers.`); return false;
			} else if (userValue[i] == 'D' && userValue[i + 1] == 'D') {
				errors(`Figure 'D' can't be used twice in Roman Numbers.`); return false;
			} else return true;
		};
		
	};



	// 3 CONVERTER - DIGITAL TO ROMAN
	// b) figure converter (roman figures to numeral array)
	const figureConverter = (romanFigure) => {
		switch (romanFigure) {
			case 'I' : romanFigure = 1; break;
			case 'IV': romanFigure = 4; break;
			case 'V' : romanFigure = 5; break;
			case 'IX': romanFigure = 9; break;
			case 'X' : romanFigure = 10; break;
			case 'XL': romanFigure = 40; break;
			case 'L' : romanFigure = 50; break;
			case 'XC': romanFigure = 90; break;
			case 'C' : romanFigure = 100; break;
			case 'CD': romanFigure = 400; break;
			case 'D' : romanFigure = 500; break;
			case 'CM': romanFigure = 900; break;
			case 'M' : romanFigure = 1000; break;
			default  : romanFigure = false; break;
		};
		return romanFigure;
	};

	
	// a) figure parser (join peculiar roman figures (IV, IX, XL, XC, CD, CM))
		const romanParser = (userValue) => {
			let collectedFigures = [],
			romanArray = [...userValue],
			romanLen = userValue.length;
			for (let i = 0; i < romanLen; i++) {
				if (romanArray[i] == 'I' && romanArray[i + 1] == 'V') {
					collectedFigures.push('IV');
					i++;
				} else if (romanArray[i] == 'I' && romanArray[i + 1] == 'X') {
					collectedFigures.push('IX');
					i++;
				} else if (romanArray[i] == 'X' && romanArray[i + 1] == 'L') {
					collectedFigures.push('XL');
					i++;
				} else if (romanArray[i] == 'X' && romanArray[i + 1] == 'C') {
					collectedFigures.push('XC');
					i++;
				} else if (romanArray[i] == 'C' && romanArray[i + 1] == 'D') {
					collectedFigures.push('CD');
					i++;
				} else if (romanArray[i] == 'C' && romanArray[i + 1] == 'M') {
					collectedFigures.push('CM');
					i++;
				} else {
					collectedFigures.push(romanArray[i]);
				};

			};
			console.log(collectedFigures);

			return collectedFigures;

		};


	
	// Roman To Digital Convertion Manager
	const convertionManager = (userValue) => {
		const parsedRoman = romanParser(userValue);
		let numeralsArray = [];
		let parsedLen = parsedRoman.length;
			for (let i = 0; i<parsedLen; i++) {
				numeralsArray.push(figureConverter(parsedRoman[i]));
			};
		console.log(numeralsArray);
		
		// Collector
		let total = 0;
			for (let eachNumber of numeralsArray) {
				total+= eachNumber;
			};
		
		// RESULT IN USER INTERFACE
			output.textContent = total + ` Rabbits`;
			output.style.color = 'var(--col-text)';
	};

	// Roman Filters Manager (filters thru converter)
	const filterManager = (checkuserValue) => {
		console.log(checkRomanInput(userValue));
		(checkRomanInput(userValue)) && romanRulesInspector(userValue) ? convertionManager(userValue) : false;
		};
		
	filterManager(userValue);

};









// === DIGITAL TO ROMAN === //
function digitalToRoman(userValue) {
	let romanResult = '';

	if( (userValue % 1 !== 0) || (userValue <= 0)) {errors(`This is floating babe!`)} else {

		let singles = userValue % 10,
		tens = (userValue % 100 - singles)/10,
		hundreds = Math.floor((userValue % 1000)/100),
		thousands = Math.floor(userValue/1000);

	
		// test digits
		console.log(thousands, hundreds, tens, singles);


		for (let i = 0, len = thousands; i < len; i++) {
			romanResult += 'M';
		};

		switch (hundreds) {
			case (9): romanResult +='CM'; break;
			case (8): romanResult +='DCCC'; break;
			case (7): romanResult +='DCC'; break;
			case (6): romanResult +='DC'; break;
			case (5): romanResult +='D'; break;
			case (4): romanResult +='CD'; break;
			case (3): romanResult +='CCC'; break;
			case (2): romanResult +='CC'; break;
			case (1): romanResult +='C'; break;
			};

		switch (tens) {
			case (9): romanResult += 'XC'; break;
			case (8): romanResult +='LXXX'; break;
			case (7): romanResult +='LXX'; break;
			case (6): romanResult +='LX'; break;
			case (5): romanResult +='L'; break;
			case (4): romanResult +='XL'; break;
			case (3): romanResult +='XXX'; break;
			case (2): romanResult +='XX'; break;
			case (1): romanResult +='X'; break;
		};

		switch (singles) {
			case (9): romanResult += 'IX'; break;
			case (8): romanResult +='VIII'; break;
			case (7): romanResult +='VII'; break;
			case (6): romanResult +='VI'; break;
			case (5): romanResult +='V'; break;
			case (4): romanResult +='IV'; break;
			case (3): romanResult +='III'; break;
			case (2): romanResult +='II'; break;
			case (1): romanResult +='I'; break;
		};
		console.log(romanResult);
		output.textContent = romanResult + ` Romans`;
		output.style.color = 'var(--col-text)';

	};


};

// 1 - USER INTERACTION

//- get the ROMAN value and keep it in a variable.
const userInput = document.getElementById('convertion-form');

//get value
userInput.onclick = function (e) {
   e.preventDefault();
   const userValue = document.getElementById('user-input').value;
   return (userValue);
};

// listen
const submit = document.getElementById('submit');
submit.addEventListener('click', inputChecker);

//start
function inputChecker() {
   const userValue = document.getElementById('user-input').value;
   // checkRomanInput(userValue); /* Sending to the Figure Filter */

	(userValue == 0) ? errors(`The "0" has not invented yet my luv...`) : (Number(userValue)) ? digitalToRoman(userValue) : romanToDigital(userValue);
};

// feedback
const output = document.querySelector('#output');
output.style.color = 'null';
'use strict';

// 1 - USER INTERACTION

//- get the ROMAN value and keep it in a variable.
const romanInput = document.getElementById('roman-form');

//get value
romanInput.onclick = function (e) {
   e.preventDefault();
   const romanValue = document.getElementById('roman-input').value;
   return (romanValue);
};

// listen
const submit = document.getElementById('roman-submit');
submit.addEventListener('click', kickStart);

//start
function kickStart() {
   const romanValue = document.getElementById('roman-input').value;
   checkRomanInput(romanValue); /* Sending to the Figure Filter */
};



// 2 - FILTERS

// filter manager
function filterManager(check) {
   (checkRomanInput(check) && romanRulesInspector(check) ? convertionManager() : false);
}

// 2.1 - ROMAN FILTERS
// a) figure filter
const checkRomanInput = function (inputRoman) {
   const defaultRomanFigures = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
   let result = false;
   for(let i = 0; i < inputRoman.length; i++) {
   (defaultRomanFigures.includes(inputRoman[i])) ? result = true : result;
   
};
console.log(result);

};

// b) roman numeral filter (roman rules filter)
function romanRulesInspector(inputRoman) {
   console.log(inputRoman);
   for (let i = 0; i < inputRoman.length; i++) {
      if (inputRoman[i] == 'V' && inputRoman[i + 1] == 'V') {
         return false;
      } else if (inputRoman[i] == 'L' && inputRoman[i + 1] == 'L') {
         return false;
      } else if (inputRoman[i] == 'D' && inputRoman[i + 1] == 'D') {
         return false;
      } else return true;
   };
console.log(romanRulesInspector());
   
};

// 2.2 NUMERIC FILTERS






// 3 CONVERTERS
// convertion manager
function convertionManager(romanValue) {
   if()
}

// a) figure parser (join peculiar roman figures (IV, IX, XL, XC, CD, CM))
function romanParser(romanString) {
   let collectedFigures = [];
   let romanArray = [...romanString];
   for (let i = 0; i < romanString.length; i++) {

      if (romanString[i] == 'I' && romanString[i + 1] == 'V') {
         collectedFigures.push(figureConverter('IV'));
         i++;
      } else if (romanString[i] == 'I' && romanString[i + 1] == 'X') {
         collectedFigures.push(figureConverter('IX'));
         i++;
      } else if (romanString[i] == 'X' && romanString[i + 1] == 'L') {
         collectedFigures.push(figureConverter('XL'));
         i++;
      } else if (romanString[i] == 'X' && romanString[i + 1] == 'C') {
         collectedFigures.push(figureConverter('XC'));
         i++;
      } else if (romanString[i] == 'C' && romanString[i + 1] == 'D') {
         collectedFigures.push(figureConverter('CD'));
         i++;
      } else if (romanString[i] == 'C' && romanString[i + 1] == 'M') {
         collectedFigures.push(figureConverter('CM'));
         i++;
      } else {
         collectedFigures.push([i]);
      };
   };
   return collectedFigures;

};

// b) figure converter (roman figures to numeral array)




// FILTERS - NUMERAL
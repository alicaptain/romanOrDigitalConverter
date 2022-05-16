'use strict';

// 1 - USER INTERACTION

// const romanForm = document.getElementById('roman-form');
// romanForm.addEventListener('click', rabbit);
// 
// function rabbit(){
//    console.log(document.getElementById('roman-input').value);
// };



// 2 - FILTERS

// filter manager
function filterManager(check) {
   (checkRomanInput(check) && romanRulesInspector(check) ? true : false);
};

// 2.1 - ROMAN FILTERS
// a) figure filter
function checkRomanInput(inputRoman) {
   const defaultRomanFigures = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
   for(let i = 0; i < inputRoman.length; i++) {
   (defaultRomanFigures.includes(inputRoman[i])) ? true : false;
   
   };

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

// a) figure parser (join peculiar roman figures (IV, IX, XL, XC, CD, CM))
function romanParser(inputRoman) {
   let collectedFigures = [];
   let romanArray = [...inputRoman];
   for (let i = 0; i < inputRoman.length; i++) {

      if (inputRoman[i] == 'I' && inputRoman[i + 1] == 'V') {
         collectedFigures.push('IV');
         i++;
      } else if (inputRoman[i] == 'I' && inputRoman[i + 1] == 'X') {
         collectedFigures.push('IX');
         i++;
      } else if (inputRoman[i] == 'X' && inputRoman[i + 1] == 'L') {
         collectedFigures.push('XL');
         i++;
      } else if (inputRoman[i] == 'X' && inputRoman[i + 1] == 'C') {
         collectedFigures.push('XC');
         i++;
      } else if (inputRoman[i] == 'C' && inputRoman[i + 1] == 'D') {
         collectedFigures.push('CD');
         i++;
      } else if (inputRoman[i] == 'C' && inputRoman[i + 1] == 'M') {
         collectedFigures.push('CM');
         i++;
      } else {
         collectedFigures.push(romanString[i]);
      };
   };
   return collectedFigures;

};

// b) figure converter (roman figures to numeral array)




// FILTERS - NUMERAL



'use strict';

// ROMAN VS NUMERAL CHECKER

checker('234');

function checker(input) {
(isNaN('input')) ? kickStart(input) : console.log('Numara');
};

















// ==== ROMAN PART ====
// 1 - USER INTERACTION

// RECEIVERS
//- get the ROMAN value and keep it in a variable.
const romanInput = document.getElementById('convert-form');

//get value
romanInput.onclick = function(e) {
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
   filterManager(romanValue); /* Sending to the Figure Filter */
};

// FEEDBACK
const rabbits = document.querySelector('#numeral-result');
rabbits.style.color = 'null';

// 2 - FILTERS
// filter manager
function filterManager(romanValue) {
   if (checkRomanInput(romanValue) === true & romanRulesInspector(romanValue) === true) {
       convertionManager(romanValue);
      } else {
         rabbits.textContent = `Rabbit Shat! 💩`;
         rabbits.style.color = 'rgba(222, 168, 168, 0.8)';
      };
}

// 2.1 - Roman Filters
// a) roman figure filter
const checkRomanInput = function (inputRoman) {
   const defaultRomanFigures = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
   let result = false;
   for(let i = 0; i < inputRoman.length; i++) {
   (defaultRomanFigures.includes(inputRoman[i])) ? result = true : result;
};
   return result;
};

// b) roman numeral filter (roman rules filter)
function romanRulesInspector(inputRoman) {
     //rule: not duplicatables
      const noSameFigures =  (inputRoman.includes('VV') || inputRoman.includes('LL') || inputRoman.includes('DD')) ? false : true;

      // rule: no more than 3 duplicates
      const noThreeFigures = (inputRoman.includes('IIII') || inputRoman.includes('VVVV') || inputRoman.includes('XXXX') || inputRoman.includes('CCCC') || inputRoman.includes('DDDD')) ? false : true;

      //rule: VX is never used
      const noVX = (inputRoman.includes('VX')) ? false : true;

     return (noSameFigures && noThreeFigures && noVX);
};

// 2.2 NUMERIC FILTERS
// (none yet)





// 3 CONVERTERS
// Convertion Manager
function convertionManager(romanInput) {
      const parsedRoman = romanParser(romanInput);
      console.log(parsedRoman);
      
      let numeralsArray = [];
      for (let i = 0; i < parsedRoman.length; i++) {
         numeralsArray.push(figureConverter(parsedRoman[i]));
      }
      console.log(numeralsArray);

      // Collector
      let total = 0;
      for (let eachNumber of numeralsArray) {
         total += eachNumber;
      }
      rabbits.textContent = total + ` Rabbits`;
      rabbits.style.color = 'var(--col-text)';
};


// a) figure parser (join peculiar roman figures (IV, IX, XL, XC, CD, CM))
function romanParser(romanInput) {
   let collectedFigures = [];
   for (let i = 0; i < romanInput.length; i++) {

      if (romanInput[i] == 'I' && romanInput[i + 1] == 'V') {
         collectedFigures.push('IV');
         i++;
      } else if (romanInput[i] == 'I' && romanInput[i + 1] == 'X') {
         collectedFigures.push('IX');
         i++;
      } else if (romanInput[i] == 'X' && romanInput[i + 1] == 'L') {
         collectedFigures.push('XL');
         i++;
      } else if (romanInput[i] == 'X' && romanInput[i + 1] == 'C') {
         collectedFigures.push('XC');
         i++;
      } else if (romanInput[i] == 'C' && romanInput[i + 1] == 'D') {
         collectedFigures.push('CD');
         i++;
      } else if (romanInput[i] == 'C' && romanInput[i + 1] == 'M') {
         collectedFigures.push('CM');
         i++;
      } else {
         collectedFigures.push(romanInput[i]);
      };

   };
   console.log(collectedFigures);

   return collectedFigures;
   

};

// b) figure converter (roman figures to numeral array)
function figureConverter(romanFigure) {

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



// FILTERS - NUMERAL
// (none yet)

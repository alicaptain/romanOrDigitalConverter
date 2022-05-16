'use strict';




//CHECK BEFORE COLLECT TOGETHER (comparison done with arabic string)
function rulesInspector(numeral) {
   for (let i = 0; i < numeral.length; i++) {
      // same numbers on the left count can only be 2 times rule
      if (numeral[i] == numeral[i++] < numeral[i + 2]) {
         descriptiveBreak(`Invalid: 2 smaller values on the left.`);
      } else if (numeral[i] == 5 && numeral[i + 1] == 5) {
         descriptiveBreak(`Invalid: V and V can't be together.`);
         return false;
      } else if (numeral[i] == 50 && numeral[i + 1] == 50) {
         descriptiveBreak(`Invalid: L and L can't be together.`)
         return false;
      } else if (numeral[i] == 500 && numeral[i + 1] == 500) {
         descriptiveBreak(`Invalid: D and D can't be together.`);
         return false;
      } else return true;
   };
};

// ROMAN -each- FIGURE CONVERTER
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

// CONVERTER
function romanConverter(romanString) {
   let collectedFigures = [];
   let romanArray = [...romanString];

   // PARSE DEFAULT ROMAN FIGURES (get left side minuses together)
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
      } else if (figureConverter(romanString[i]) == false) {
         descriptiveBreak('Non Romanic number!');
         break;
      } else {
         collectedFigures.push(figureConverter(romanString[i]));
      };


   };


   // COLLECTOR LOOP
   if (rulesInspector(collectedFigures) === true) {
      let total = 0;
      for (let eachNumber of collectedFigures) {
         total += eachNumber;
      }
      return total;
   }
};


// User Interaction
//get value and send to process
const romanInput = document.getElementById('roman-form');
const numeralResult = document.getElementById('numeral-result');

romanInput.onclick = function (e) {
   e.preventDefault();
   const romanValue = document.getElementById('roman-input').value;
   romanConverter(romanValue.toUpperCase());

   //present the result

   printOut = numeralResult.textContent;
};

// DESCRIPTIVE BREAK (for non-roman figures)
function descriptiveBreak(receivedValue) {
   return `Something's wrong: ${receivedValue}`;
};







/*

STEPS

- get the ROMAN value and keep it in a variable.
- check if the roman input has any 'not roman' character
      -- if so: warn user and start over.
      -- if not: proceed.
- convert the roman values into decimal values by joining 4's and 9's etc.
put them into an array.

- check decimal values array for any rule breaking like triple 5's.
      -- if there is: warn user and start over
      -- if not: proceed.
- sum each decimal values and get the result
- present the result to user.
'strict mode';

//USER INTERACTION
// -> to check number function



// CHECK IF NUMBER FUNCTION


// set the input type -> numeral or roman
// set the output type? (or style accordingly)
// forward the input to related filter




// ROMAN FILTERS
// ROMAN CONVERTER



// NUMERAL FILTERS
// NUMERAL CONVERTER


// === ARRANGE FOR GLOBAL SCOBE EFFICIENCY === //
// (try to keep mostly in func expressions) //

// 1. NUMERAL CONVERTER
// 2. NUMERAL FILTER
// 3.	ROMAN CONVERTER
// 4. ROMAN FILTER


// === let's start === //


// NUMERAL CONVERTER

numeralConverter = numeralInput => {
  let romans = 'MDCLXVI',
  romanResult = '',
  singles = numeralInput % 10,
  tens = (numeralInput % 100 - singles)/10,
  hundreds = Math.floor((numeralInput % 1000)/100),
  thousands = Math.floor(numeralInput/1000);
  let hlen = hundreds/100;


  // test digits
  console.log(thousands, hundreds, tens, singles);
  
  calculateHundreds = hundreds => {
   console.log(`everything's fine.`);

  };
  


for (let i = 0, len = thousands; i < len; i++) {
   romanResult += 'M';
};

// switch (hundreds) {
//   case (9): romanResult += 'CM'; break;
//   case (8): romanResult +='DCCC'; break;
//   case (7): romanResult +='DCC'; break;
//   case (6): romanResult +='DC'; break;
//   case (5): romanResult +='D'; break;
//   case (4): romanResult +='CD'; break;
//   case (3): romanResult +='CCC'; break;
//   case (2): romanResult +='CC'; break;
//   case (1): romanResult +='C'; break;
//   };

  switch (hundreds) {
    case (9): romanResult += 'CM'; break;
    case (7 | 6 | 5): romanResult +='ORABIRIL'; break;
   
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
  
};


  //if number is bigger than 1000 
  		//calculate how many 1000's we have
  		// divide the number to 1000, separate the rest
  		// and 
  			// add 'M' for each 1000
  			// proceed with what's left
  //if number is less than 1000 
  			

  //example value
  numeralConverter(4623);


























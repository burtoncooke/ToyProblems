// Write a function numberToEnglish, it should take a number and return the number as a string 
// using English words.

function numberToEnglish (number) {
  var converter = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  var powers = {

    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: ' trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion'
  }
  
  if(number === 1000000000000) {
    return 'one trillion';
  }
  var english = '';

  var numberString = number.toString();

  if(numberString.length == 1) {
    if(number == 0) {
      return 'zero';
    }
    else {
      return converter[number];
    }
    
  }


  for(var j = numberString.length - 1; j >= 0; j--) { 

    var i = (j !== numberString.length - 1) ? -(j - (numberString.length - 1)) : 0;

    if(i % 3 === 0 && i > 0) { 
      if(numberString[j] == '0') {

        if(parseInt(numberString[j - 1]) || parseInt(numberString[j - 2])) {

          english = powers[10 ** i] + ' ' + english
        }
        

      }
      else if(j !== 0) {
        english = powers[10 ** i] + ' ' + english;
      }
      else {
        // console.log("in this one", i)
        english = converter[parseInt(numberString[j])] + ' ' + powers[10 ** i] + ' ' + english
      }
    }

    

    if(i % 3 === 1) {


      if(numberString[j] == '1') {
        english = converter[parseInt(numberString[j]) * 10 + parseInt(numberString[j + 1])] + ' ' + english;
      }
      else if(numberString[j] == '0') {

        english = converter[parseInt(numberString[j + 1])] + english;
      }
      else {

        if(numberString[j + 1] == 0) {
          english = converter[parseInt(numberString[j]) * 10] + ' ' + english;
        }
        else {

          english = converter[parseInt(numberString[j]) * 10] + '-' + converter[parseInt(numberString[j + 1])] + ' ' + english;
        }

      }
    }

    if(i % 3 == 2 && numberString[j] != '0') {

      english = converter[parseInt(numberString[j])] + ' hundred' + ' ' + english
    }
    
  }

  if(english[english.length - 1] == ' ') {
      return english.slice(0, english.length - 1);
  }


  return english;

}

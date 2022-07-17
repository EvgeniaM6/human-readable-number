module.exports = function toReadable (number) {
  let result = '';
  let digitString = '';
  let decadeString = '';

  const numberString = String(number);
  const numberLength = numberString.length;

  const thirdDigitFromEnd = numberString.charAt(numberLength - 3);
  const secondDigitFromEnd = numberString.charAt(numberLength - 2);
  const lastDigitFromEnd = numberString.charAt(numberLength - 1);

  if (thirdDigitFromEnd) {
    getDigit(thirdDigitFromEnd);
    result = digitString + ' hundred'

    if (secondDigitFromEnd !== '0') {
      getDecade(secondDigitFromEnd);
      result += ' ' + decadeString;
    };

    if (lastDigitFromEnd !== '0' && secondDigitFromEnd !== '1') {
      getDigit(lastDigitFromEnd);
      result += ' ' + digitString;
    };

  } else if (secondDigitFromEnd) {
    getDecade(secondDigitFromEnd);
    result = decadeString;

    if (lastDigitFromEnd !== '0' && secondDigitFromEnd !== '1') {
      getDigit(lastDigitFromEnd);
      result += ' ' + digitString;
    };
    
  } else {
    if (lastDigitFromEnd === '0') {
      result = 'zero'
    } else {
      getDigit(lastDigitFromEnd);
      result = digitString

    }
  };

  function getDecade(decadeDigit) {
    if (decadeDigit === '1') {
      switch (lastDigitFromEnd) {
        case '0':
          decadeString = 'ten'
          break;
        case '1':
          decadeString = 'eleven'
          break;
        case '2':
          decadeString = 'twelve'
          break;
        case '3':
          decadeString = 'thirteen'
          break;
        case '4':
          decadeString = 'fourteen'
          break;
        case '5':
          decadeString = 'fifteen'
          break;
        case '6':
          decadeString = 'sixteen'
          break;
        case '7':
          decadeString = 'seventeen'
          break;
        case '8':
          decadeString = 'eighteen'
          break;
        case '9':
          decadeString = 'nineteen'
          break;
      
        default:
          break;
      }
    } else {
      switch (decadeDigit) {
        case '2':
          decadeString = 'twenty'
          break;
        case '3':
          decadeString = 'thirty'
          break;
        case '4':
          decadeString = 'forty'
          break;
        case '5':
          decadeString = 'fifty'
          break;
        case '6':
          decadeString = 'sixty'
          break;
        case '7':
          decadeString = 'seventy'
          break;
        case '8':
          decadeString = 'eighty'
          break;
        case '9':
          decadeString = 'ninety'
          break;
      
        default:
          break;
      }
    }
    
    return decadeString;

  }

  function getDigit(aloneDigit) {
    switch (aloneDigit) {
      case '1':
        digitString = 'one'
        break;
      case '2':
        digitString = 'two'
        break;
      case '3':
        digitString = 'three'
        break;
      case '4':
        digitString = 'four'
        break;
      case '5':
        digitString = 'five'
        break;
      case '6':
        digitString = 'six'
        break;
      case '7':
        digitString = 'seven'
        break;
      case '8':
        digitString = 'eight'
        break;
      case '9':
        digitString = 'nine'
        break;
    
      default:
        break;
    }
    return digitString
  }

  return result
}
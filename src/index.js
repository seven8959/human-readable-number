  
module.exports = function toReadable(number) {
    
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];

    let numberArr = number.toString().split('');

    if (number === 0) {
        return 'zero';
    }

    if (number < 20) {
        return ones[number];
    }

    if (number > 19 && number < 100) {
        return (tens[numberArr[0]] + ' ' + ones[numberArr[1]]).trim();
    }

    if (number > 99) {
        if (numberArr[2] === '0' && numberArr[1] === '0') {
            return (ones[numberArr[0]] + ' hundred ').trim();
        } else
            return (ones[numberArr[0]] + ' hundred ' + toReadable(Number(numberArr[1] + numberArr[2]))).trim();
    }

}

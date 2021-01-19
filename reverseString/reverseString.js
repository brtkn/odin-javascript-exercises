const reverseString = function(word) {

    let sentence = word.split('').reverse().join('');
    return sentence;

}

module.exports = reverseString

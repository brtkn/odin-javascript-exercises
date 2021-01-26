const caesar = function(string, shift) {
    return string
        .split('')
        .map(char => shiftChar(char, shifht))
        .join('');
} 

// a = 97 A = 65  b = 98 B = 66 capitals start at 65 end at 90 (Z), lowercase start at 97 end at 122 (z)
const codeSet = code => (code < 97 ? 65 : 97) ;

// % it works with negative numbers//

const mod = (n, m) => (n % m + m) % m; 

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90 || (code >= 97 && code <= 122))) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
}

module.exports = caesar

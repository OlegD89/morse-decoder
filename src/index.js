const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// decode(expr)

function decode(expr) {
    // write your solution here
    const tenBytes = expr.match(/.{10}/g);
    let result = tenBytes.map(tenByte => {
        if(tenByte=='**********')
            return ' ';
        const twoBytes = tenByte.match(/.{2}/g);
        let morseCode = twoBytes.map(o=>{
            return o=='10'?'.':o=='11'?'-':'';
        })

        return MORSE_TABLE[morseCode.join('')];
    });
    return result.join('');
}

module.exports = {
    decode
}
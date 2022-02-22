const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr){
    let resoorse = ''
    for(let s=0; s<expr.length; s= s +10){
    let z = expr.substr(s,10)
    if(z==='**********') {resoorse = resoorse + ' '}
    else{
        let i = ''
        for(q=0; q<11; q= q +2){
            if(z.substr(q,2)==='10'){
                i = i +'.'
            }else if(z.substr(q,2)==='11'){
                i=i+'-'
            }
        }
        for(let key in MORSE_TABLE){
            if(key===i){
                resoorse = resoorse + MORSE_TABLE[key]
            }
        }
    }
}
return resoorse
}

module.exports = {
    decode
}
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let beginIndex = 0;
    let missingLetter = undefined;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let arrAlphabet = alphabet.split('')
    let arrStr = str.split('');
    let isFound = false;

    for(let i = 0; i < arrAlphabet.length; i++){
        if(arrStr[0] == arrAlphabet[i])
            beginIndex = i;
            
    }

    for(let i = 0; i < arrStr.length -1; i++){
        if(arrStr[i + 1] !== arrAlphabet[beginIndex + i + 1] && !isFound){
            missingLetter = arrAlphabet[beginIndex + i + 1 ];
            isFound = true;
        }
            
    }

    return missingLetter;
}
  
  fearNotLetter("qrstvwxyz");
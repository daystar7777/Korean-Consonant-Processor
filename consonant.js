// Function to get the last character of a string
function getLastCharacter(str) {
    let i = str.length - 1;
    while (i >= 0 && !/\w/.test(str[i])) {
        i--;
    }
    if (i >= 0) {
        return str[i];
    }
    return '';
}

// Function to get the character type of a character
function getCharacterType(ch) {
    if (/\d/.test(ch)) {
        if (ch == '2' || ch == '4' || ch == '5') {
            return 0;
        }
        return 1;
    } else if (/[a-zA-Z]/.test(ch)) {
        if (/[aeiouAEIOU]$/.test(ch)) {
            return 0;
        }
        return 1;
    } else if (/^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uACFF\uA000-\uA48F\uFF00-\uFFEF\uD788-\uDBFF\uDC00-\uDFFF\p{Lo}\p{Nl}\p{Lm}\p{Mn}\p{Mc}\p{Pc}\p{Cf}\p{So}]+$/.test(ch)) {
        return 2;
    } else if (/\s|\p{P}/u.test(ch)) {
        return -1;
    }
    return -1;
}

// Function to check if a Korean character has a final consonant
function checkJongsung(ch) {
    let type = getCharacterType(ch);
    switch (type) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            let code = ch.charCodeAt(0) - 0xAC00;
            if (code < 0 || code > 11171) {
                return -1;
            }
            let jong = code % 28;
            return jong != 0 ? 1 : 0;
        default:
            return -1;
    }
}

let str = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+";
let lastChar = getLastCharacter(str);
let type = getCharacterType(lastChar);
let jongsung = checkJongsung(lastChar);
console.log("Last character: " + lastChar);
console.log("Type: " + type);
console.log("Has final consonant: " + jongsung);

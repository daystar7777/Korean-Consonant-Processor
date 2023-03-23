
# This implementation uses regular expressions to check the character type and the `charCodeAt` method to get the Unicode value of a character.
import re

# Function to get the last character of a string
def getLastCharacter(s):
    i = len(s) - 1
    while i >= 0 and not s[i].isalnum():
        i -= 1
    if i >= 0:
        return s[i]
    return ''

# Function to get the character type of a character
def getCharacterType(ch):
    if ch.isdigit():
        if ch == '2' or ch == '4' or ch == '5':
            return 0
        return 1
    elif ch.isalpha():
        if ch.lower() in ['a', 'e', 'i', 'o', 'u']:
            return 0
        return 1
    elif re.match(r'^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uAFFF\uFFA0-\uFFDC]+$', ch):
        return 2
    elif ch.isspace() or ch in string.punctuation:
        return -1
    return -1

# Function to check if a Korean character has a final consonant
def checkJongsung(ch):
    type = getCharacterType(ch)
    if type == 0:
        return 0
    elif type == 1:
        return 1
    elif type == 2:
        code = ord(ch) - 0xAC00
        if code < 0 or code > 11171:
            return -1
        jong = code % 28
        return 1 if jong != 0 else 0
    else:
        return -1

str = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+"
lastChar = getLastCharacter(str)
type = getCharacterType(lastChar)
jongsung = checkJongsung(lastChar)
print("Last character: " + lastChar)
print("Type: " + str(type))
print("Has final consonant: " + str(jongsung))

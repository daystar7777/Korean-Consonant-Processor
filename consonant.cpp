#include <iostream>
#include <string>
#include <locale>

// Function to get the last character of a string
char getLastCharacter(std::string str) {
    int i = str.length() - 1;
    while (i >= 0 && !isalnum(str[i])) {
        i--;
    }
    if (i >= 0) {
        return str[i];
    }
    return '\0';
}

// Function to get the character type of a character
int getCharacterType(char ch) {
    if (isdigit(ch)) {
        if (ch == '2' || ch == '4' || ch == '5') {
            return 0;
        }
        return 1;
    } else if (isalpha(ch)) {
        std::locale loc;
        char lowerCh = std::tolower(ch, loc);
        if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u') {
            return 0;
        }
        return 1;
    } else if ((ch & 0xE0) == 0xE0) {
        return 2;
    } else if (isspace(ch) || ispunct(ch)) {
        return -1;
    }
    return -1;
}

// Function to check if a Korean character has a final consonant
int checkJongsung(char ch) {
    int type = getCharacterType(ch);
    switch (type) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            int code = (ch & 0xFF) - 0xAC00;
            if (code < 0 || code > 11171) {
                return -1;
            }
            int jong = code % 28;
            return jong != 0 ? 1 : 0;
        default:
            return -1;
    }
}

int main() {
    std::string str = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+";
    char lastChar = getLastCharacter(str);
    int type = getCharacterType(lastChar);
    int jongsung = checkJongsung(lastChar);
    std::cout << "Last character: " << lastChar << std::endl;
    std::cout << "Type: " << type << std::endl;
    std::cout << "Has final consonant: " << jongsung << std::endl;
    return 0;
}

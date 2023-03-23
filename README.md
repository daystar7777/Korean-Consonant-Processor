Korean Consonant Processor
Korean Consonant Processor is a small library that provides functions to process Korean characters, specifically to check if a Korean character has a final consonant. This project includes implementations of the library in C, C++, JavaScript, and Python.
consonant.c => C implementation
consonant.cpp => C++ implementation
consonant.js => javascript implementation
consonant.py => python implementation

Features
Supports Korean characters, English letters, numbers, and punctuation marks
Returns 1 if a Korean character has a final consonant, 0 if not, and -1 if the input is invalid
Provides functions to get the last character and the character type of a string
Implemented in C, C++, JavaScript, and Python


[[Usage]]

[C++]
To use the C++ implementation of Korean Consonant Processor, include the header file kcp.hpp and link with the source file kcp.cpp. Then you can call the functions getLastCharacter, getCharacterType, and checkJongsung to process Korean characters.

Here's an example of how to use the functions:
```cpp
#include <iostream>
#include <string>
#include <locale>
#include "kcp.hpp"

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
```


[C]
To use the C implementation of Korean Consonant Processor, include the header file kcp.h and link with the source file kcp.c. Then you can call the functions getLastCharacter, getCharacterType, and checkJongsung to process Korean characters.

Here's an example of how to use the functions:

```c
#include <stdio.h>
#include "kcp.h"

int main() {
    char str[] = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+";
    char lastChar = getLastCharacter(str);
    int type = getCharacterType(lastChar);
    int jongsung = checkJongsung(lastChar);
    printf("Last character: %c\n", lastChar);
    printf("Type: %d\n", type);
    printf("Has final consonant: %d\n", jongsung);
    return 0;
}
```


[JavaScript]
To use the JavaScript implementation of Korean Consonant Processor, simply include the kcp.js file in your HTML document or import it in your JavaScript code. Then you can call the functions getLastCharacter, getCharacterType, and checkJongsung to process Korean characters.

Here's an example of how to use the functions:

```javascript
let str = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+";
let lastChar = getLastCharacter(str);
let type = getCharacterType(lastChar);
let jongsung = checkJongsung(lastChar);
console.log("Last character: " + lastChar);
console.log("Type: " + type);
console.log("Has final consonant: " + jongsung);
```



[Python]
To use the Python implementation of Korean Consonant Processor, simply import the kcp.py module in your Python code. Then you can call the functions getLastCharacter, getCharacterType, and checkJongsung to process Korean characters.

Here's an example of how to use the functions:

```python
str = "한글 조사 처리기 Korean Consonant Processor 12345 !@#$%^&*()_+"
lastChar = getLastCharacter(str)
type = getCharacterType(lastChar)
jongsung = checkJongsung(lastChar)
print("Last character: " + lastChar)
print("Type: " + str(type))
print("Has final consonant: " + str(jongsung))
```

License
Korean Consonant Processor is licensed under the MIT License. See the LICENSE file for details.

Contributions
Contributions to Korean Consonant Processor are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request on GitHub.

Credits
Korean Consonant Processor was created by daystar7777.
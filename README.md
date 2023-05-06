## Installation

Go to root directory of your node project and run the following command:
```cmd
npm i ciphers-data.js
```

Then in your node_modules folder appear new package

---
# Using

## Atbash

* Encoding/Decoding with ```encode()``` and ```decode()```

    ```js
         const { Atbash } = require('ciphers-data.js')

         const message = Atbash.encode('ABC')
         const decodeMessage = Atbash.decode('ZYX')

         console.log(message) //ZYX
         console.log(decodeMessage) //ABC
    ```

## Autokey

* It's polyalphabetic substitution cipher, basic on Vigenere cipher

* Encoding with ```encoded()```

    Both parameters of function will be uppercasing, key will be writing to the array whose length is equal pain text length. Rest elements in this array will be completing by characters of plain text.
    ```js
        const { Autokey } = require('ciphers-data.js')

        const message = Autokey.encode('ola', 'dogandcat')

        console.log(message) //RZG
    ```
* Decoding with ```decode()```

    Key must be the same as in encoding.

    ```js
        const { Autokey } = require('ciphers-data.js')

        const message = Autokey.decode('rzg', 'dogandcat')

        console.log(message) //OLA

    ```

## Playfair cipher

* First of all, you must import package in your .js file:
    ```js
    const { Playfair } = require('ciphers-data.js')
    ```
* Using ```encode()``` function.

    You can use it if you want change plain text into encoded playfair sentence. Function needs two arguments 
    ``` 
        encode(<plain text>, <key>) {...}
    ```
    key is a uppercased by algorithm string which is using to encode setence with written in 5x5 matrix modified alphabet.

    **Example:**
     ```js

        const { Playfair } = require('ciphers-data.js')

        const message = Playfair.encode('roses are red, violets are','blue')
        //                               ^plain text^                 ^key^
        console.log(message) // TMYGTESUSUCWKIUAPTUTUY

     ```

* Using ```decode()``` function.

    You can use it whether you want decode text encoded in playfair cipher
    ```
    decode(<encoded text>,<key>)
    ```
    key must be the same as was in encodeing

    **Example:**
    ```js

        const { Playfair } = require('ciphers-data.js')

        const message = Playfair.decode('TMYGTESUSUCWKIUAPTUTUY', 'blue')
        //                                ^encoded text^           ^key^
        console.log(message) //ROSESAREREDVIOLETSAREX

    ```
    As you can see algorith added ```X``` on the end of string, because when length of your plain text isn't even it's necessary to encoding.

## Caesar cipher

* It's one of basic ciphers using swaping letters in string, import modules which is obligate to encoding, deconding and findingKey is the same like in Playfair cipher.
But in this implementation program is using ASCII char codes from 40 to 126 to encoding and decoding string.

    ```js
        const { Caesar } = require('ciphers-data.js')
    ```

* Encoding string with ``` encode()```:

    Key must be integer **(not minus)**

    **Example:**
    ```js

    const { Caesar } = require('ciphers-data.js')

    const message = Caesar.encode('hello world', 12)

    console.log(message) //tqxx{-{~xp

    ```
* Decoding string with ``` decode()```

    Key must be the **same** as at encoding

    **Example:**
    ```js

    const { Caesar } = require('ciphers-data.js')

    const message = Caesar.decode('tqxx{-{~xp', 12)

    console.log(message) //hello world

    ```

* Finding key with ``` findKey()```

    You need plainText, and encoded test

    ```js

    const { Caesar } = require('ciphers-data.js')

    const key = Caesar.findKey('hello world', 'tqxx{-{~xp')

    console.log(key) // [12, 12, 12, 12, 12, 12, 12, 12, 12, 12]

    ```
    Function returns keys of all swaping characters in string.






---

Package is in developing mode.

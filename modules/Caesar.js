function encode(plainText, key) {
    let arrayOfCharCodes = []
    let codedArray = []
    for (let i = 0; i < plainText.length; i++) {
        arrayOfCharCodes.push(plainText.charCodeAt(i))
        let charAsciiCode = parseInt(arrayOfCharCodes[i]) + parseInt(key);
        while (charAsciiCode > 126) {
            charAsciiCode -= 86;
        }
        let char = String.fromCharCode(charAsciiCode)
        codedArray.push(char)
    }
    let result = codedArray.toString().replace(/[,]/g, '')

    return result

}

function decode(encodedText, key) {
    let arrayOfCharCodes = []
    let decodedArray = []
    for (let i = 0; i < encodedText.length; i++) {
        arrayOfCharCodes.push(encodedText.charCodeAt(i))
        let charAsciiCode = parseInt(arrayOfCharCodes[i]) - parseInt(key);
        while (charAsciiCode < 40) {
            charAsciiCode += 86
        }
        let char = String.fromCharCode(charAsciiCode)
        decodedArray.push(char)
    }
    let result = decodedArray.toString().replace(/[,]/g, '')
    return result
}

function findKey(plainText, encodedText) {
    const keys = []
    plainText.toString();
    encodedText.toString();
    if (plainText.length != encodedText.length) {
        if (plainText.length > encodedText.length) {
            for (let i = 0; i < encodedText.length; i++) {
                if ((encodedText.charCodeAt(i) - plainText.charCodeAt(i)) < 0) {
                    keys.push((126 - plainText.charCodeAt(i)) + (encodedText.charCodeAt(i) - 40))

                } else {
                    keys.push(encodedText.charCodeAt(i) - plainText.charCodeAt(i))
                }

            }
        } else {
            for (let i = 0; i < plainText.length; i++) {
                if ((encodedText.charCodeAt(i) - plainText.charCodeAt(i)) < 0) {
                    keys.push((126 - plainText.charCodeAt(i)) + (encodedText.charCodeAt(i) - 40))
                } else {
                    keys.push(encodedText.charCodeAt(i) - plainText.charCodeAt(i))
                }

            }
        }
    } else {
        for (let i = 0; i < encodedText.length; i++) {
            if ((encodedText.charCodeAt(i) - plainText.charCodeAt(i)) < 0) {
                keys.push((126 - plainText.charCodeAt(i)) + (encodedText.charCodeAt(i) - 40))
            } else {
                keys.push(encodedText.charCodeAt(i) - plainText.charCodeAt(i))
            }

        }
    }
    let isSameKey = true;
    if (keys.length > 2) {
        for (let i = 1; i <= keys.length; i++) {
            if (keys[i] != keys[i - 1]) {
                isSameKey = false
            }
        }
    }
    if (isSameKey) {
        return keys[0]
    } else {
        return keys
    }

}

module.exports = { encode, decode, findKey }
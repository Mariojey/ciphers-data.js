function encode(plainText, key) {
    let arrayOfCharCodes = []
    let codedArray = []
    for (let i = 0; i < plainText.length; i++) {
        arrayOfCharCodes.push(plainText.charCodeAt(i))
        let charAsciiCode = parseInt(arrayOfCharCodes[i]) + parseInt(key);
        while (charAsciiCode > 126) {
            charAsciiCode -= 96;
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
            charAsciiCode += 96
        }
        let char = String.fromCharCode(charAsciiCode)
        decodedArray.push(char)
    }
    let result = decodedArray.toString().replace(/[,]/g, '')
    return result
}

module.exports = { encode, decode }
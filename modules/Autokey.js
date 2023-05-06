function generateMatrix() {
    let matrix = []
    for (let i = 65; i <= 90; i++) {
        let matrixElement = []
        for (let j = i; j <= i + 25; j++) {

            let pos = j
            while (pos > 90) {
                pos -= 26
            }
            matrixElement.push(String.fromCharCode(pos))

        }
        matrix.push(matrixElement)

    }
    return matrix;
}

function generateKey(plainText, key) {
    let keyArray = []
    key = [...key]
    for (let i = 0; i < key.length; i++) {
        keyArray.push(key[i])

    }
    plainText = [...plainText]
    if (plainText.length > key.length) {
        for (let i = 0; i < (plainText.length - key.length); i++) {
            keyArray.push(plainText[i])

        }
    }
    return keyArray
}

function encode(plainText, key) {

    const matrix = generateMatrix()
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "")
    key = key.toUpperCase().replace(/[^A-Z]/g, "")
    let keyTable = generateKey(plainText, key)
    keyTable = keyTable.toString().replaceAll(',', '')

    let encoded = []
    for (let i = 0; i < keyTable.length; i++) {
        let x = keyTable.charCodeAt(i) - 65;
        let y = plainText.charCodeAt(i) - 65;
        encoded.push(matrix[x][y])

    }
    encoded = encoded.toString().replaceAll(',', '')
    return encoded

}

function decode(encodedText, key) {
    const matrix = generateMatrix()
    encodedText = encodedText.toUpperCase()
    key = key.toUpperCase()
    keyTable = [...key]
    plainText = []

    for (let i = 0; i < key.length; i++) {

        let x = key.charCodeAt(i) - 65;
        let letter = encodedText.at(i);

        for (let j = 0; j < matrix[x].length; j++) {
            if (matrix[x][j] == letter) {
                plainText.push(matrix[0][j])
            }

        }
    }
    let lengthRestKey = encodedText.length - key.length
    for (let i = 0; i < lengthRestKey; i++) {
        keyTable.push(plainText[i])

    }
    for (let i = key.length; i < keyTable.length; i++) {
        let x = keyTable[i].charCodeAt(0) - 65;
        let letter = encodedText.at(i);

        for (let j = 0; j < matrix[x].length; j++) {
            if (matrix[x][j] == letter) {
                plainText.push(matrix[0][j])
            }

        }

    }
    plainText = plainText.toString().replaceAll(',', '')
    return plainText
}

module.exports = {
    encode: encode,
    decode: decode
}
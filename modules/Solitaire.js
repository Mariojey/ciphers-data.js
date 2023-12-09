function generateMatrix(text) {
    let array = [...text]
    let privateMatrix = []
    for (let i = 0; i < array.length; i += 5) {
        let quart = []
        for (let j = 0; j < 5; j++) {
            if (i >= array.length - 1) {
                quart.push('X')
            } else {
                quart.push(array[i + j])
            }

        }
        privateMatrix.push(quart)
    }
    return privateMatrix
}

function changeToAscii(array) {
    let privateMatrix = []
    for (let i = 0; i < array.length; i++) {
        let quart = []
        for (let j = 0; j < array[i].length; j++) {
            quart.push(array[i][j].charCodeAt(0) - 64)
        }
        privateMatrix.push(quart)
    }
    return privateMatrix
}

function encode(plainText, key) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g)
    key = key.toUpperCase().replace(/[^A-Z]/g)
    let plainTextMatrix = []
    let keyMatrix = []
    plainTextMatrix = generateMatrix(plainText)
    keyMatrix = generateMatrix(key)
    plainTextAsNumbers = changeToAscii(plainTextMatrix)
    keyAsNumbers = changeToAscii(keyMatrix)
    let summedNumbers = []
    for (let i = 0; i < plainTextAsNumbers.length; i++) {
        let summedQuart = []
        for (let j = 0; j < plainTextAsNumbers[i].length; j++) {
            if (plainTextAsNumbers[i][j] + keyAsNumbers[i][j] > 26) {
                summedQuart.push((plainTextAsNumbers[i][j] + keyAsNumbers[i][j]) - 26)
            } else {
                summedQuart.push(plainTextAsNumbers[i][j] + keyAsNumbers[i][j])
            }
        }
        summedNumbers.push(summedQuart)
    }
    return summedNumbers
}

module.exports = {
    encode: encode
}
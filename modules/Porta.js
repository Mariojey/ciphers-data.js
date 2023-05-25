function generateMatrix() {
    let matrix = []
    let asciiIndexFirst = 78;
    let asciiIndexSecond = 78
    for (let i = 0; i < 13; i++) {
        let matrixElement = []
        let asciiIndexFirstActuall = asciiIndexFirst;
        let asciiIndexSecondActuall = asciiIndexSecond;

        for (let i = 0; i < 13; i++) {
            while (asciiIndexFirstActuall > 90) {
                asciiIndexFirstActuall -= 13;
            }

            matrixElement.push(String.fromCharCode(asciiIndexFirstActuall))
            asciiIndexFirstActuall += 1;
        }
        for (let i = 0; i < 13; i++) {
            while (asciiIndexSecondActuall > 77) {
                asciiIndexSecondActuall -= 13;
            }

            matrixElement.push(String.fromCharCode(asciiIndexSecondActuall))
            asciiIndexSecondActuall += 1;
        }
        asciiIndexFirst += 1;
        asciiIndexSecond -= 1;
        matrix.push(matrixElement)
    }
    return matrix
}

function generateColumn() {
    let column = []
    for (let i = 65; i <= 90; i += 2) {
        let element = []
        element.push(String.fromCharCode(i))
        element.push(String.fromCharCode(i + 1))
        column.push(element)

    }
    return column;
}

function encode(plainText, key) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "")
    key = key.toUpperCase().replace(/[^A-Z]/g, "")

    if (key.length > plainText.length) {
        key = key.slice(0, plainText.length - 1)
    } else if (key.length < plainText.length) {
        let kLen = key.length
        for (let i = key.length - 1; i < plainText.length; i++) {
            key = key + key.charAt(i - kLen)
        }
    }
    const column = generateColumn()
    let result = []
    let matrix = generateMatrix()
    for (let a = 0; a < key.length; a++) {
        for (let i = 0; i < column.length; i++) {
            for (let j = 0; j < column[i].length; j++) {
                if (column[i][j] == key.charAt(a)) {

                    let y = i
                    for (let char = 65; char <= 90; char++) {
                        if (plainText.charAt(a) == String.fromCharCode(char)) {

                            let x = char - 65
                            result.push(matrix[y][x])
                        }

                    }
                }

            }

        }

    }
    result = result.toString().replaceAll(',', '')
    return result
}

function decode(encodedText, key) {
    encodedText = encodedText.toUpperCase().replace(/[^A-Z]/g, "")
    key = key.toUpperCase().replace(/[^A-Z]/g, "")

    if (key.length > encodedText.length) {
        key = key.slice(0, encodedText.length - 1)
    } else if (key.length < encodedText.length) {
        let kLen = key.length
        for (let i = key.length - 1; i < encodedText.length; i++) {
            key = key + key.charAt(i - kLen)
        }
    }
    const column = generateColumn()
    let result = []
    let matrix = generateMatrix()
    for (let a = 0; a < key.length; a++) {

        for (let i = 0; i < column.length; i++) {
            for (let j = 0; j < column[i].length; j++) {
                if (column[i][j] == key.charAt(a)) {

                    for (let pos = 0; pos < matrix[i].length; pos++) {
                        if (encodedText.charAt(a) == matrix[i][pos]) {
                            let index = pos + 65
                            result.push(String.fromCharCode(index))
                        }

                    }
                }

            }

        }

    }
    result = result.toString().replaceAll(',', '')
    return result
}

module.exports = {
    encode: encode,
    decode: decode
}
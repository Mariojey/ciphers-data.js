function generateMatrix() {
    let matrix = []
    let asciiIndex = 78;
    for (let i = 0; i < 13; i++) {
        let matrixElement = []
        let asciiIndexActuall = asciiIndex
        for (let i = 0; i < 26; i++) {
            while (asciiIndexActuall > 90) {
                asciiIndexActuall -= 26;
            }
            matrixElement.push(String.fromCharCode(asciiIndexActuall))
            asciiIndexActuall += 1;
        }
        asciiIndex += 1
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
                        if (plainText.charAt(char - 65) == String.fromCharCode(char)) {
                            let x = char - 65
                            result.push(matrix[y][x])
                            console.log(x, y);
                        }

                    }
                }

            }

        }

    }
    console.log(plainText);
    console.log(key);
    return result
}

module.exports = {
    encode: encode
}
function encode(plainText, key) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I")
    key = key.toUpperCase().replace(/[^A_Z]/g)
    let matrix = []

    function removeDuplicate(arg) {
        let set = new Set();
        let letters = [...arg];
        letters.forEach(element => {
            set.add(element)
        })

        return set
    }

    function generateMatrix(array) {
        let matrixPrivate = [];
        let position = 0
        for (let a = 0; a < 5; a++) {
            let matrixInner = []
            for (let b = 0; b < 5; b++) {
                matrixInner.push(array[position])
                position += 1
            }
            matrixPrivate.push(matrixInner)
        }
        return matrixPrivate
    }

    key = removeDuplicate(key)
    let alphabet = []
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i))
    }
    alphabet.slice(9)
    let arrayToConvertIntoMatrix = key.concat(alphabet)
    arrayToConvertIntoMatrix = removeDuplicate(arrayToConvertIntoMatrix.toStrin())
    matrix = generateMatrix(arrayToConvertIntoMatrix)

    plainText = [...plainText]
    if ((plainText.length / 2) != 0) {
        plainText.push('X')
    }

    for (let i = 0; i < plainText.length; i += 2) {

        let,
        pos0,
        pos1
        let letters = [plainText[i], plainText[i + 1]]
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                if (matrix[c][k] == letters[0]) {
                    pos0 = [c, k]
                }
                if (matrix[c][k] == letters[1]) {
                    pos1 = [c, k]
                }

            }

        }

    }

}

module.exports = encode
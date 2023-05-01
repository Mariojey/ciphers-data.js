function encode(plainText, key) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I")
    key = key.toUpperCase().replace(/[^A-Z]/g, "")
    let matrix = []

    function removeDuplicate(arg) {
        let set = new Set();
        let letters = [...arg]
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
    alphabet.splice(9, 1)
    key = [...key]
    let arrayToConvertIntoMatrix = key.concat(alphabet)
    arrayToConvertIntoMatrix = removeDuplicate(arrayToConvertIntoMatrix.toString().replaceAll(',', ''))
    matrix = generateMatrix([...arrayToConvertIntoMatrix])

    plainText = [...plainText]
    if (plainText.length % 2 != 0) {
        plainText.push('X')
    }
    let encodedPos = [];
    for (let i = 0; i < plainText.length; i += 2) {

        let pos0 = [];
        let pos1 = [];
        let letters = [plainText[i], plainText[i + 1]]
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                if (matrix[r][c] == letters[0]) {
                    pos0 = [r, c]
                }
                if (matrix[r][c] == letters[1]) {
                    pos1 = [r, c]
                }

            }

        }
        //Check if row indexex are same
        if (pos0[0] == pos1[0]) {
            let row = pos0[0]
            let columnFirst = pos0[1] + 1
            let columnSecond = pos1[1] + 1
            while (columnFirst >= 5) {
                columnFirst -= 5
            }
            while (columnSecond >= 5) {
                columnSecond -= 5
            }
            encodedPos.push([row, columnFirst], [row, columnSecond])
        }
        //Check if column indexes are same
        if (pos0[1] == pos1[1]) {
            let column = pos0[1]
            let rowFirst = pos0[0] + 1
            let rowSecond = pos1[0] + 1
            while (rowFirst >= 5) {
                rowFirst -= 5
            }
            while (rowSecond >= 5) {
                rowSecond -= 5
            }
            encodedPos.push([rowFirst, column], [rowSecond, column])
        }
        //Check if indexes are different
        if ((pos0[0] != pos1[0]) && (pos0[1] != pos1[1])) {
            let rowFirst = pos0[0]
            let rowSecond = pos1[0]
            let columnFirst = pos1[1]
            let columnSecond = pos0[1]
            encodedPos.push([rowFirst, columnFirst], [rowSecond, columnSecond])
        }

    }
    let result_array = []
        //Change co-ordinates into chars
    for (let i = 0; i < encodedPos.length; i++) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if ((encodedPos[i][0] == r) && (encodedPos[i][1] == c)) {
                    result_array.push(matrix[r][c])
                }
            }

        }

    }
    console.log(plainText)
    console.log(matrix);
    result_array = result_array.toString()
    return result_array;

}

module.exports = { encode: encode };
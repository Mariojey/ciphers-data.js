function encode(plainText) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "")
    let result = []
    for (let i = 0; i < plainText.length; i++) {
        let charPosition = 90 - plainText.charCodeAt(i) + 65
        result.push(String.fromCharCode(charPosition))
    }
    return result
}

module.exports = encode
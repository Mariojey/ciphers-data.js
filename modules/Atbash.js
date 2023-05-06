function code(plainText) {
    plainText = plainText.toUpperCase().replace(/[^A-Z]/g, "")
    let result = []
    for (let i = 0; i < plainText.length; i++) {
        let charPosition = 90 - plainText.charCodeAt(i) + 65
        result.push(String.fromCharCode(charPosition))
    }
    result = result.toString().replaceAll(',', '')
    return result;
}


module.exports = {
    encode: code,
    decode: code
}
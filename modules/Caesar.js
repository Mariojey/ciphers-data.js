class Caesar {

    constructor(plainText, key) {
        this.plainText = plainText;
        this.key = key;
    }

    encode() {
        const plainText = this.plainText;
        const key = this.key
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
}
module.exports = Caesar
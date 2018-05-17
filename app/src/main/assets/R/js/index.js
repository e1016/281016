
// + - - - - - - - - +
// |   Validations   |
// + - - - - - - - - +

class Coherence {
    checkValidBase(number, base) {
        let mth = number.toString()
        if (base === 2  && mth.match(/^[0-1]*$/)) {
            return true
        } else if (base === 8  && mth.match(/^[0-7]*$/)) {
            return true
        } else if (base === 10 && mth.match(/^[0-9]*$/)) {
            return true
        } else if (base === 16 && mth.match(/^[0-9|A-F|a-f]*$/)) {
            return true
        } else {
            return false
        }

    }

    isValidBase (base) {
        if ( base === 10 || base === 2 || base === 16 || base === 8 ) {
            return true
        } else {
            throw `>> base "${base}" it's not supported`
            return false
        }
    }
}


// + - - - - - - - - +
// |   Body Class    |
// + - - - - - - - - +

class Converter extends Coherence {

    constructor() {
        super()
    }

    isOk (number, base) {
        this.isValidBase(base)
        if ( !this.checkValidBase(number, base) ) {
            //throw `>> Number ${number} is not base ${base} convertible`
            throw `"${number}" no es un número base ${base} válido`
        }
    }

    toDec (number, base = 2) {
        this.isOk(number, base)

        let result

        switch (base) {
            case 2:

                result = 0
                number.split('').reverse().forEach((n, i) => {
                    result += parseInt(n) * Math.pow(2, i)
                })

            break;
            case 8:

                result = 0
                number.split('').reverse().forEach( (n, i) => {
                    result += parseInt(n) * Math.pow(8, i)
                })

            break;
            case 16:

                result = 0
                number.split('').reverse().forEach( (n, i) => {
                    n = n.toUpperCase()
                    n = (n === 'A') ? 10 :
                        (n === 'B') ? 11 :
                        (n === 'C') ? 12 :
                        (n === 'D') ? 13 :
                        (n === 'E') ? 14 :
                        (n === 'F') ? 15 : n

                    result += parseInt(n) * Math.pow(16, i)
                })

            break;
            case 10:
             return parseInt(number)
            break;

        }

        return result
    }

    toBin (number, base = 10) {
        this.isOk(number, base)

        let final

        switch (base) {
            case 10:
                final = []
                while (number > 0) {
                    final.push(number % 2)
                    number = parseInt(number / 2)
                }

                return parseInt(final.reverse().join(''))

            break;
            case 8:
                return parseInt(this.toBin(this.toDec(number, 8), 10))
            break;
            case 16:
                return parseInt(this.toBin(this.toDec(number, 16), 10))
            break;
            case 2:
                return parseInt(number)
            break;

        }
    }

    toHex (number, base = 10) {
        this.isOk(number, base)

        let final

        switch (base) {
            case 16:
                return number
            break;
            case 10:
                final = []
                while (number > 0) {
                    let n = (number % 16)
                    final.push(
                        (n === 10) ? 'A' :
                        (n === 11) ? 'B' :
                        (n === 12) ? 'C' :
                        (n === 13) ? 'D' :
                        (n === 14) ? 'E' :
                        (n === 15) ? 'F' : n
                    )
                    number = parseInt(number / 16)
                }
                return final.reverse().join('')
            break;
            case 8:
                return this.toHex(this.toDec(number, 8), 10)
            break;
            case 2:
                return this.toHex(this.toDec(number, 2), 10)
            break;
        }
    }

    toOct (number, base = 10) {
        this.isOk(number, base)
        let final
        switch (base) {
            case 16:
                return this.toOct(this.toDec(number, 16), 10)
            break;
            case 10:
                final = []

                while (number > 0) {
                    final.push(number % 8)
                    number = parseInt(number / 8)

                }

                return parseInt(final.reverse().join(''))
            break;
            case 8:
                return parseInt(number)
            break;
            case 2:
                return parseInt(this.toOct(this.toDec(number, 2), 10))
            break;
        }
    }
}

function romanNumerals(numVal) {
    if (numVal < 0)
        return undefined
    if (numVal == 0)
        return ''
    if(numVal > 1000)
        return romanNumerals(1000) + romanNumerals(numVal - 1000)
    if(numVal == 1000)
        return 'M'
    if(numVal > 900)
        return romanNumerals(900) + romanNumerals(numVal - 900)
    if(numVal == 900)
        return romanNumerals(100) + romanNumerals(1000)
    if(numVal > 500)
        return romanNumerals(500) + romanNumerals(numVal - 500)
    if(numVal == 500)
        return 'D'
    if(numVal > 400)
        return romanNumerals(400) + romanNumerals(numVal - 400)
    if(numVal == 400)
        return romanNumerals(100) + romanNumerals(500)
    if(numVal > 100)
        return romanNumerals(100) + romanNumerals(numVal - 100)
    if(numVal == 100)
        return 'C'
    if(numVal > 90)
        return romanNumerals(90) + romanNumerals(numVal - 90)
    if(numVal == 90)
        return romanNumerals(10) + romanNumerals(100)
    if(numVal > 50)
        return romanNumerals(50) + romanNumerals(numVal - 50)
    if (numVal == 50)
        return 'L'
    if (numVal > 40)
        return romanNumerals(40) + romanNumerals(numVal - 40)
    if(numVal == 40)
        return romanNumerals(10) + romanNumerals(50)
    if (numVal > 10) {
        var roman = '';
        for (i = 0; i < Math.floor(numVal / 10); i++) {
            roman += romanNumerals(10);
        }
        return roman + romanNumerals(numVal % 10)
    }
    if (numVal == 10)
        return 'X'
    if (numVal == 9)
        return romanNumerals(1) + romanNumerals(10)
    if (5 < numVal && numVal < 9)
        return romanNumerals(5) + romanNumerals(numVal - 5)
    if (numVal == 5)
        return 'V'
    if (numVal == 4)
        return romanNumerals(1) + romanNumerals(5)
    if (numVal == 3)
        return 'III'
    if (numVal == 2)
        return 'II'
    if (numVal == 1)
        return 'I'
}
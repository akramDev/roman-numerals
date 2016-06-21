describe('Roman Numerals', function () {

    it('should return I for romanNumerals of 1', function () {
        expect(romanNumerals(1)).toBe('I')
    })

    it('sould return II for romanNumerals of 2', function () {
        expect(romanNumerals(2)).toBe('II')
    })

    it('sould return III for romanNumerals of 3', function () {
        expect(romanNumerals(3)).toBe('III')
    })

    it('sould return V for romanNumerals of 5', function () {
        expect(romanNumerals(5)).toBe('V')
    })

    it('should return X for romanNumerals of 10', function () {
        expect(romanNumerals(10)).toBe('X')
    })

})
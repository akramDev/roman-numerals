describe('Roman Numerals', function () {

    it('should return  for romanNumerals of 0', function () {
        expect(romanNumerals(0)).toBe('')
    })

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

    it('should return IV for romanNumerals 4', function () {
        expect(romanNumerals(4)).toBe('IV')
    })

    it('should return VI for romanNumerals of 6',function () {
        expect(romanNumerals(6)).toBe('VI')
    })

    it('should return VII for romanNumerals of 7', function () {
        expect(romanNumerals(7)).toBe('VII')
    })

    it('should return VIII for romanNumerals of 8', function () {
        expect(romanNumerals(8)).toBe('VIII')
    })

    it('should return VIII for romanNumerals of 9', function () {
        expect(romanNumerals(9)).toBe('IX')
    })

    it('should return XI for romanNumerals of 11', function () {
        expect(romanNumerals(11)).toBe('XI')
    })

    it('should return XI for romanNumerals of 13', function () {
        expect(romanNumerals(13)).toBe('XIII')
    })

    it('should return XV for romanNumerals of 15', function () {
        expect(romanNumerals(15)).toBe('XV')
    })

    it('should return XI for romanNumerals of 19', function () {
        expect(romanNumerals(19)).toBe('XIX')
    })

    it('should return XX for romanNumerals of 20', function () {
        expect(romanNumerals(20)).toBe('XX')
    })

    it('should return XXV for romanNumerals of 25', function () {
        expect(romanNumerals(25)).toBe('XXV')
    })

    it('should return XXVII for romanNumerals of 27', function () {
        expect(romanNumerals(27)).toBe('XXVII')
    })

    it('should return XXIX for romanNumerals of 29', function () {
        expect(romanNumerals(29)).toBe('XXIX')
    })

    it('should return XXX for romanNumerals of 30', function () {
        expect(romanNumerals(30)).toBe('XXX')
    })

    it('should return XXXIV for romanNumerals of 34', function () {
        expect(romanNumerals(34)).toBe('XXXIV')
    })

    it('should return XL for romanNumerals of 40', function () {
        expect(romanNumerals(40)).toBe('XL')
    })

    it('should return XLII for romanNumerals of 42', function () {
        expect(romanNumerals(42)).toBe('XLII')
    })

    it('should return XLV for romanNumerals of 45', function () {
        expect(romanNumerals(45)).toBe('XLV')
    })

    it('should return XLVII for romanNumerals of 47', function () {
        expect(romanNumerals(47)).toBe('XLVII')
    })

    it('should return XLIX for romanNumerals of 49', function () {
        expect(romanNumerals(49)).toBe('XLIX')
    })

    it('should return XLIX for romanNumerals of 50', function () {
        expect(romanNumerals(50)).toBe('L')
    })

    it('should return LVI for romanNumerals of 56', function () {
        expect(romanNumerals(56)).toBe('LVI')
    })

    it('should return LX for romanNumerals of 60', function () {
        expect(romanNumerals(60)).toBe('LX')
    })

    it('should return LXXIX for romanNumerals of 79', function () {
        expect(romanNumerals(79)).toBe('LXXIX')
    })

    it('should return XC for romanNumerals of 90', function () {
        expect(romanNumerals(90)).toBe('XC')
    })

    it('should return CLVII for romanNumerals of 157', function () {
        expect(romanNumerals(157)).toBe('CLVII')
    })

    it('should return CCCLXIX for romanNumerals of 369', function () {
        expect(romanNumerals(369)).toBe('CCCLXIX')
    })

    it('should return CDLXIX for romanNumerals of 469', function () {
        expect(romanNumerals(469)).toBe('CDLXIX')
    })

    it('should return DX for romanNumerals of 510', function () {
        expect(romanNumerals(510)).toBe('DX')
    })

    it('should return DLXXVII for romanNumerals of 577', function () {
        expect(romanNumerals(577)).toBe('DLXXVII')
    })

    it('should return DLXXVII for romanNumerals of 577', function () {
        expect(romanNumerals(577)).toBe('DLXXVII')
    })

    it('should return DCCLXXXIX for romanNumerals of 789', function () {
        expect(romanNumerals(789)).toBe('DCCLXXXIX')
    })

    it('should return CM for romanNumerals of 900', function () {
        expect(romanNumerals(900)).toBe('CM')
    })

    it('should return CMXXXIII for romanNumerals of 933', function () {
        expect(romanNumerals(933)).toBe('CMXXXIII')
    })

    it('should return CMLXXXVI for romanNumerals of 986', function () {
        expect(romanNumerals(986)).toBe('CMLXXXVI')
    })

    it('should return M for romanNumerals of 1000', function () {
        expect(romanNumerals(1000)).toBe('M')
    })

    it('should return MCMLXV for romanNumerals of 1965', function () {
        expect(romanNumerals(1965)).toBe('MCMLXV')
    })

    it('should return MM for romanNumerals of 2000', function () {
        expect(romanNumerals(2000)).toBe('MM')
    })

    it('should return MMMCLVIII for romanNumerals of 3158', function () {
        expect(romanNumerals(3158)).toBe('MMMCLVIII')
    })

    it('should return undefined for romanNumerals of negative', function () {
        expect(romanNumerals(-1)).toBeUndefined()
    })

})
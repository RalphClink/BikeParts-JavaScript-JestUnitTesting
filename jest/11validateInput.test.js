let partsStorage = require("../src/partsStorage");

describe("Testing the validateInput() function", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
    })

    describe("Check that the validateInput() function catches invalid inputs", () => {
        test("Catches an invalid input in the id field string", () => {
            expect(thePartsStorage.validateInput("one", "test", "test", 25)).toBe(false)
        })

        test("Catches an invalid input in the name field (int)", () => {
            expect(thePartsStorage.validateInput(1, 2, "test", 25)).toBe(false)
        })

        test("Catches an invalid input in the name field (boolean)", () => {
            expect(thePartsStorage.validateInput(1, true, "test", 25)).toBe(false)
        })

        test("Catches an invalid input in the category field (int)", () => {
            expect(thePartsStorage.validateInput(1, "test", 2, 25)).toBe(false)
        })

        test("Catches an invalid input in the category field (boolean)", () => {
            expect(thePartsStorage.validateInput(1, "test", true, 25)).toBe(false)
        })

        test("Catches an invalid input in the price field (string)", () => {
            expect(thePartsStorage.validateInput(1, "test", "test", "twenty five"))
        })

        test("Catches an invalid input in the price field (boolean)", () => {
            expect(thePartsStorage.validateInput(1, "test", "test", true))
        })

        test("Will allow valid inputs", () => {
            expect(thePartsStorage.validateInput(1, "test", "test", 25))
        })

        test("Will allow valid inputs (decimal in price field)", () => {
            expect(thePartsStorage.validateInput(1, "test", "test", 25.00))
        })

    })
})
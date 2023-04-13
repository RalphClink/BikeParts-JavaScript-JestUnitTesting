let partsStorage = require("../src/partsStorage");

describe("Add an invalid part (invalid inputs) to the parts table", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
    })

    describe("Adding an invalid part should return an error message", () => {
        test("Adding an invalid part should return an error message", () => {
            expect(thePartsStorage.addPart(1, 2, 3, 4)).toBe("Invalid Inputs")
        })
    })
})

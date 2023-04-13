let partsStorage = require("../src/partsStorage");

describe("Retrieving all Parts", () => {
    let thePartsStorage
    let testVar

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Darth Vader Bell", "Bells", 25.00)
        testVar = thePartsStorage.getAllParts()
    })

    describe("The getAllParts should return the correct string", () => {
        test("The string should contain the Darth Vader Bell", () => {
            expect(thePartsStorage.getAllParts()).toBe("Darth Vader Bell")
        })
    })
})
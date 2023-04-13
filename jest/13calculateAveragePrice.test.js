let partsStorage = require("../src/partsStorage");

describe("Retrieving all the parts that are a certain price", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
    })

    describe("Test that the function returns the correct figure", () => {
        test("Function should return 38.33", () => {
            thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 10.00)
            thePartsStorage.addPart(2, "Bell", "Accessories", 25.00)
            thePartsStorage.addPart(3, "Handle Bars", "Handles", 80.00)
            expect(thePartsStorage.calculateAveragePrice()).toBe(38.33)
        })

        test("Function should return 119.16", () => {
            thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 240.00)
            thePartsStorage.addPart(2, "Bell", "Accessories", 12.54)
            thePartsStorage.addPart(3, "Handle Bars", "Handles", 104.95)
            expect(thePartsStorage.calculateAveragePrice()).toBe(119.16)
        })
    })
})
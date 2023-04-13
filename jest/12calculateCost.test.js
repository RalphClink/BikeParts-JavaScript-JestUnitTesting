let partsStorage = require("../src/partsStorage");

describe("Retrieving all the parts that are a certain price", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        // Add a part to calculate the cost for
        thePartsStorage.addPart(1, "Drink Bottle", "Bottles", 15.00)
    })

    describe("Test different quantities to check the calculation is accurate", () => {
        test("0 drink bottles should return 0", () => {
            expect(thePartsStorage.calculateCost(1, 0)).toBe(0)
        })

        test("1 drink bottle should return 15", () => {
            expect(thePartsStorage.calculateCost(1, 1)).toBe(15)
        })

        test("10 drink bottles should return 150", () => {
            expect(thePartsStorage.calculateCost(1, 10)).toBe(150)
        })
        
        test("100 drink bottles should return 1500", () => {
            expect(thePartsStorage.calculateCost(1, 100)).toBe(1500)
        })
    })
})
let partsStorage = require("../src/partsStorage");

describe("Adding 3 parts to the partsStorage", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        // Add the parts out of order, then sort them
        thePartsStorage.addPart(3, "Handle Bars", "Handles", 75.00)
        thePartsStorage.addPart(2, "Bell", "Accessories", 25.00)
        thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 15.00)
        thePartsStorage.sortParts()
    })

    describe("The parts should be in ascending order by ID in the allMyPartsArray", () => {
        test("Should be 3 parts in the allMyParts array", () => {
            const arrayLength = thePartsStorage.allMyParts.length
            expect(arrayLength).toBe(3)
        })

        test("The 1st part in the array should have an ID of 1", () => {
            thePart = thePartsStorage.allMyParts[0]
            expect(thePart.id).toBe(1)
        })

        test("The 2nd part in the array should have an ID of 2", () => {
            thePart = thePartsStorage.allMyParts[1]
            expect(thePart.id).toBe(2)
        })

        test("The 3rd part in the array should have an ID of 3", () => {
            thePart = thePartsStorage.allMyParts[2]
            expect(thePart.id).toBe(3)
        })
    })
})

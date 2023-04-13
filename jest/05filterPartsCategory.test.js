let partsStorage = require("../src/partsStorage");

describe("Retrieving all the parts that fall within a category", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        // Adds 5 parts, 3 of which should appear in the filteredPartsCategory Array
        thePartsStorage.addPart(1, "Drink Bottle", "Bottles", 15.00)
        thePartsStorage.addPart(2, "Darth Vader Bell", "Accessories", 25.00)
        thePartsStorage.addPart(3, "Handle Bars", "Handles", 75.00)
        thePartsStorage.addPart(4, "Thomas the Tank Engine Bell", "Accessories", 25.00)
        thePartsStorage.addPart(5, "Boba Fett Bell", "Accessories", 25.00)
        thePartsStorage.filterPartsCategory("Accessories")
    })

    describe("There should be 3 expected parts in the filteredPartsCategory array", () => {
        test("There should be 3 parts in the filteredPartsCategory array", () => {
            const arrayLength = thePartsStorage.filteredPartsCategory.length
            expect(arrayLength).toBe(3)
        })

        test("The first part should be the Darth Vader Bell", () => {
            aPart = thePartsStorage.filteredPartsCategory[0]
            expect(aPart.partName).toBe("Darth Vader Bell")
        })

        test("The second part should be the Thomas the Tank Engine Bell", () => {
            aPart = thePartsStorage.filteredPartsCategory[1]
            expect(aPart.partName).toBe("Thomas the Tank Engine Bell")
        })

        test("The 3rd part should be the Boba Fett Bell", () => {
            aPart = thePartsStorage.filteredPartsCategory[2]
            expect(aPart.partName).toBe("Boba Fett Bell")
        })
    })
})
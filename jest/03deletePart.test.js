let partsStorage = require("../src/partsStorage");

describe("Adding 3 parts to the partsStorage", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 15.00)
        thePartsStorage.addPart(2, "Bell", "Accessories", 25.00)
        thePartsStorage.addPart(3, "Handle Bars", "Handles", 75.00)

        thePartsStorage.deletePart(3)
    })

    describe("Checks that there are only 2 expected parts", () => {
        test("Should be 2 parts in the allMyParts array", () => {
            const arrayLength = thePartsStorage.allMyParts.length
            expect(arrayLength).toBe(2)
        })

        test("The 1st part in the allmyParts array should be part 1", () => {
            aPart = thePartsStorage.allMyParts[0]
            expect(aPart.id).toBe(1)
        })

        test("The 2nd part in the allMyParts array should be part 2", () => {
            aPart = thePartsStorage.allMyParts[1]
            expect(aPart.id).toBe(2)
        })
    })

})
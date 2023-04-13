let partsStorage = require("../src/partsStorage");

describe("Retrieving all the parts that are a certain price", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Darth Vader Bell", "Bells", 25.00)
        thePartsStorage.addPart(2, "Boba Fett Bell", "Bells", 25.00)
        thePartsStorage.addPart(3, "Bike Handles", "Handlebars", 75.00)
        thePartsStorage.addPart(4, "Drink Bottle", "Accessories", 15.00)
        thePartsStorage.defaultValues()
    })

    describe("There should be 3 test parts in the allMyParts array", () => {
        test("allMyParts should have 3 parts in it", () => {
            arrayLength = thePartsStorage.allMyParts.length
            expect(arrayLength).toBe(3)
        })

        test("The 1st part should be Test Part 1", () => {
            aPart = thePartsStorage.allMyParts[0]
            expect(aPart.partName).toBe("Test Part 1")
        })

        test("The 2nd part should be Test Part 2", () => {
            aPart = thePartsStorage.allMyParts[1]
            expect(aPart.partName).toBe("Test Part 2")
        })

        test("The 3rd part should be Test Part 3", () => {
            aPart = thePartsStorage.allMyParts[2]
            expect(aPart.partName).toBe("Test Part 3")
        })

        test("The updated parts list should now be empty", () => {
            arrayLength = thePartsStorage.updatedParts.length
            expect(arrayLength).toBe(0)
        })
    })
})
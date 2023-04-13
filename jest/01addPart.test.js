let partsStorage = require("../src/partsStorage");

describe("Adding 3 parts to the partsStorage", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 15.00)
        thePartsStorage.addPart(2, "Bell", "Accessories", 25.00)
        thePartsStorage.addPart(3, "Handle Bars", "Handles", 75.00)
    })

    describe("Check the parts have been created correctly, and there are 3 parts", () => {
        test("Should be 3 parts in the allMyParts array", () => {
            const arrayLength = thePartsStorage.allMyParts.length
            expect(arrayLength).toBe(3)
        })

        test("The 1st part should have an ID of 1", () => {
            thePart = thePartsStorage.allMyParts[0]
            expect(thePart.id).toBe(1)
        })

        test("The 1st part should have a name of Drink Bottle", () => {
            thePart = thePartsStorage.allMyParts[0]
            expect(thePart.partName).toBe("Drink Bottle")
        })

        test("The 1st part should have a category of Accessories", () => {
            thePart = thePartsStorage.allMyParts[0]
            expect(thePart.partCategory).toBe("Accessories")
        })

        test("The 1st part should have a price of 15.00", () => {
            thePart = thePartsStorage.allMyParts[0]
            expect(thePart.partPrice).toBe(15.00)
        })

        test("The 2nd part should have an ID of 2", () => {
            thePart = thePartsStorage.allMyParts[1]
            expect(thePart.id).toBe(2)
        })

        test("The 2nd part should have a name of Bell", () => {
            thePart = thePartsStorage.allMyParts[1]
            expect(thePart.partName).toBe("Bell")
        })

        test("The 2nd part should have a category of Accessories", () => {
            thePart = thePartsStorage.allMyParts[1]
            expect(thePart.partCategory).toBe("Accessories")
        })

        test("The 2nd part should have a price of 25.00", () => {
            thePart = thePartsStorage.allMyParts[1]
            expect(thePart.partPrice).toBe(25.00)
        })

        test("The 3rd part should have an ID of 3", () => {
            thePart = thePartsStorage.allMyParts[2]
            expect(thePart.id).toBe(3)
        })

        test("The 3rd part should have a name of Handle Bars", () => {
            thePart = thePartsStorage.allMyParts[2]
            expect(thePart.partName).toBe("Handle Bars")
        })

        test("The 3rd part should have a category of Handles", () => {
            thePart = thePartsStorage.allMyParts[2]
            expect(thePart.partCategory).toBe("Handles")
        })

        test("The 3rd part should have a price of 75.00", () => {
            thePart = thePartsStorage.allMyParts[2]
            expect(thePart.partPrice).toBe(75.00)
        })
    })
})
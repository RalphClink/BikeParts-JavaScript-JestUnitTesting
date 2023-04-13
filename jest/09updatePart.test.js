let partsStorage = require("../src/partsStorage");

describe("Testing the updatePart() function", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Drink Bottle", "Accessories", 15.00)
        thePartsStorage.addPart(2, "Bell", "Accessories", 25.00)
        thePartsStorage.addPart(3, "Handle Bars", "Handles", 75.00)
        thePartsStorage.updatePart(2, "Darth Vader Bell", "Bells", 15.00)
    })

    describe("Check the updated part and the updatedParts array", () => {
        test("Part 2 should now have a name of Darth Vader Bell", () => {
            aPart = thePartsStorage.allMyParts[1]
            expect(aPart.partName).toBe("Darth Vader Bell")
        })

        test("Part 2 should now have a category of Bells", () => {
            aPart = thePartsStorage.allMyParts[1]
            expect(aPart.partCategory).toBe("Bells")
        })

        test("Part 2 should now have a price of 15", () => {
            aPart = thePartsStorage.allMyParts[1]
            expect(aPart.partPrice).toBe(15)
        })

        
        test("The updatedParts array should now have 1 part in it", () => {
            arrayLength =  thePartsStorage.updatedParts.length
            expect(arrayLength).toBe(1)
        })
        
        test("The part in the updatedParts array should be a Bell", () => {
            aPart = thePartsStorage.updatedParts[0]
            expect(aPart.partName).toBe("Bell")
        })

        test("The part in the updatedParts array should have a category of Accessories", () => {
            aPart = thePartsStorage.updatedParts[0]
            expect(aPart.partCategory).toBe("Accessories")
        })

        test("The part in the updatedParts array should have a price of 25.00", () => {
            aPart = thePartsStorage.updatedParts[0]
            expect(aPart.partPrice).toBe(25.00)
        })

    })
}) 

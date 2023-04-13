let partsStorage = require("../src/partsStorage");

describe("Retrieving all the parts that are a certain price", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Darth Vader Bell", "Bells", 25.00)
        thePartsStorage.addPart(2, "Boba Fett Bell", "Bells", 25.00)
        thePartsStorage.addPart(3, "Bike Handles", "Handlebars", 75.00)
        thePartsStorage.addPart(4, "Drink Bottle", "Accessories", 15.00)
    })

    describe("The findPart funtion should return the correct value", () => {
        test("Finding part 1 should return the Darth Vader Bell", () => {
            expect(thePartsStorage.findPart(1).partName).toBe("Darth Vader Bell")
        })

        test("Finding part 2 should return the Boba Fett Bell", () => {
            expect(thePartsStorage.findPart(2).partName).toBe("Boba Fett Bell")
        })

        test("Finding part 3 should return the Bike Handles", () => {
            expect(thePartsStorage.findPart(3).partName).toBe("Bike Handles")
        })

        test("Finding part 4 should return the drink bottle", () => {
            expect(thePartsStorage.findPart(4).partName).toBe("Drink Bottle")
        })
    })
})


const Part = require("../src/part");
let partsStorage = require("../src/partsStorage");

describe("Testing the updated parts overwrite function", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Test Part 1", "Test Cat 1", 1)
        thePartsStorage.addPart(2, "Test Part 2", "Test Cat 2", 2)
        let newPart = new Part(1, "Testers", "Testers", 100)
        thePartsStorage.updatedParts.push(newPart)
        thePartsStorage.updatePart(2, "Tester", "Tester", 2)
    })

    describe("Test that the edited part gets ADDED to the list and doesn't override", () => {
        test("Edited part should be added instead of overriding anything", () => {
            expect(thePartsStorage.updatedParts[1].id).toBe(2)
        })
        test("Part name of Test Part 2 should be in the list", () => {
            expect(thePartsStorage.updatedParts[1].partName).toBe("Test Part 2")
        })
    })

    describe("Test exceptions/missing part", () => {
        test("Expect part to be missing from list", () => {
            expect(thePartsStorage.updatePart(10, "Test", "Test", 10)).toBe("No part matching the given ID found")
        })
        test("Test invalid inputs", () => {
            expect(thePartsStorage.updatePart(1, 1, 1, 1)).toBe("Invalid Inputs")
        })
    })
})

const Part = require("../src/part");
let partsStorage = require("../src/partsStorage");

describe("Testing the updated parts overwrite function", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
        thePartsStorage.addPart(1, "Test Part", "Test Category", 50)
        let newPart = new Part(1, "Testers", "Testers", 100)
        thePartsStorage.updatedParts.push(newPart)
        thePartsStorage.updatePart(1, "New", "New", 10)
    })

    describe("The existing edit should be overrided", () => {
        test("The id should still be 1", () => {
            expect(thePartsStorage.updatedParts[0].id).toBe(1)
        })
        test("The part name should now be Test Part", () => {
            expect(thePartsStorage.updatedParts[0].partName).toBe("Test Part")
        })
    })
})
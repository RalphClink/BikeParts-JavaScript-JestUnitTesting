/* eslint linebreak-style: ["error", "unix"]*/

let partsStorage = require("../src/partsStorage");

describe("Empty Parts Storage Check for functions", () => {
    let thePartsStorage

    beforeEach(() => {
        thePartsStorage = new partsStorage()
    })

    describe("Checks that property arrays have been created", () => {
        test("should have an allMyParts property", () => {
            expect(Object.prototype.hasOwnProperty.call(thePartsStorage, "allMyParts")).toBeTruthy()
        })

        test("should have an updatedParts property", () => {
            expect(Object.prototype.hasOwnProperty.call(thePartsStorage, "updatedParts")).toBeTruthy()
        })

        test("should have a filteredPartsName property", () => {
            expect(Object.prototype.hasOwnProperty.call(thePartsStorage, "filteredPartsName")).toBeTruthy()
        })

        test("should have a filteredPartsCategory property", () => {
            expect(Object.prototype.hasOwnProperty.call(thePartsStorage, "filteredPartsCategory")).toBeTruthy()
        })

        test("should have a filteredPartsPrice property", () => {
            expect(Object.prototype.hasOwnProperty.call(thePartsStorage, "filteredPartsPrice")).toBeTruthy()
        })

    })
})


// Some test syntax to refer back to later
//test("Should have an array for .allMyParts", () => {
//    expect(Array.isArray(thePartsStorage.allMyParts)).toBeTruthy()
//})

//test("should have nothing in the allMyParts array", () => {
//    const arraySize = thePartsStorage.allMyParts.length
//    expect(arraySize).toBe(0)
//})
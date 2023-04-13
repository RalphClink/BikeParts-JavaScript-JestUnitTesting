const Part = require("../src/part")
let aPart = require("../src/part")

describe("Check the parts constructor has created correct properties", () => {
    let aPart

    beforeEach(() => {
        aPart = new Part(1, "Test Part", "Test Category", 25.00)
    })

    describe("Check that the part has 4 correctly labelled properties", () => {
        test("Should have an id property", () => {
            expect(Object.prototype.hasOwnProperty.call(aPart, "id")).toBeTruthy()
        })

        test("Should have a partName property", () => {
            expect(Object.prototype.hasOwnProperty.call(aPart, "partName")).toBeTruthy()
        })

        test("Should have a partCategory property", () => {
            expect(Object.prototype.hasOwnProperty.call(aPart, "partCategory")).toBeTruthy()
        })

        test("Should have a partPrice property", () => {
            expect(Object.prototype.hasOwnProperty.call(aPart, "partPrice")).toBeTruthy()
        })
    })
})
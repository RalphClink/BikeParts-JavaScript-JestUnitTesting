/* eslint-env es6*/
/* eslint quotes: ["error", "single"]*/
/* eslint semi: ["error", "never"]*/
/* globals*/

module.exports = class Part {
    constructor(newId, newPartName, newPartCategory, newPartPrice) {
        this.id = newId
        this.partName = newPartName
        this.partCategory = newPartCategory
        this.partPrice = newPartPrice
    }
}

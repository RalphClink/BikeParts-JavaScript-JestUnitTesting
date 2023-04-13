let Part = require("./part")

module.exports = class partsStorage {
    constructor() {
        this.allMyParts = []
        this.updatedParts = []
        this.filteredPartsName = []
        this.filteredPartsCategory = []
        this.filteredPartsPrice = []
    }


    // Adds a part to the database (allMyParts list)
    addPart(newId, newPartName, newPartCategory, newPartPrice) {
        if (this.validateInput(newId, newPartName, newPartCategory, newPartPrice) === true) {
            let newPart = new Part(newId, newPartName, newPartCategory, newPartPrice)
            this.allMyParts.push(newPart)
        } else {
            return "Invalid Inputs"
        }
    }


    // Orders the parts in the allMyParts list by their id, index 0 will be the lowest id etc
    // In most browsers (except Firefox) this sorts the list in DESCENDING order
    // Reversing the list at the end fixes this
    sortParts() {
        this.allMyParts.sort(function(a, b) {
            return a.id - b.id
        });
    }

    // Deletes all parts from the database that have the given id
    deletePart(deleteId) {
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].id === deleteId) {
                this.allMyParts.splice(i, 1)
                i --
            }
        }
    }


    // Returns a list of all parts with that name
    filterPartsName(filterPartName) {
        this.filteredPartsName = []
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].partName.includes(filterPartName)) {
                this.filteredPartsName.push(this.allMyParts[i])
            }
        }
    }


    // Returns an array of all parts that are in the given category
    filterPartsCategory(filterPartCategory) {
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].partCategory.includes(filterPartCategory)) {
                this.filteredPartsCategory.push(this.allMyParts[i])
            }
        }
    }


    // Returns an array of all parts that cost as much as the given figure
    filterPartsPrice(filterPartPrice) {
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].partPrice == filterPartPrice) {
                this.filteredPartsPrice.push(this.allMyParts[i])
            }
        }
    }


    // Saves the contents of the allMyParts array to localStorage within the browser
    // Convers the array into a json object for storage
    saveParts() {
        const jsonArr = JSON.stringify(this.allMyParts);
        localStorage.setItem("array", jsonArr);
    }


    // Loads the contents of the allMyParts array and converts back to an array
    loadParts() {
        const str = localStorage.getItem("array");
        const parsedArr = JSON.parse(str);
    }


    // Updates parts with a given id new user input
    updatePart(updatedId, updatePartName, updatePartCategory, updatePartPrice) {
        // Validate the users inputs before updating
        if (this.validateInput(updatedId, updatePartName, updatePartCategory, updatePartPrice) === true) {
            // If the inputs are valid, check the part exists (IE the partId exists in allMyParts)
            for (var x = 0; x < this.allMyParts.length; x++) {
                if (this.allMyParts[x].id == updatedId) {
                    // Create a part to add to the updatedPartsList
                    var deepCopiedPart =  this.deepCopy(this.allMyParts[x].id, this.allMyParts[x].partName, this.allMyParts[x].partCategory, this.allMyParts[x].partPrice)
                    // If there are no items in the updatedParts list, add the backupPart
                    if (this.updatedParts.length == 0) {
                        this.updatedParts.push(deepCopiedPart)
                    // Otherwise check if the part already exists in the updatedParts list
                    // If it does exist, update the part
                    } else {
                        for (var j = 0; j < this.updatedParts.length; j++) {
                            if (this.updatedParts[j].id == updatedId) {
                                this.updatedParts[j].partName = this.allMyParts[x].partName
                                this.updatedParts[j].partCategory = this.allMyParts[x].partCategory
                                this.updatedParts[j].partPrice = this.allMyParts[x].partPrice
                                break
                            // Otherwise if we get to the last part and still can't find the correct part,
                            // add the part to the list
                            } else if ((j + 1) == this.updatedParts.length && this.updatedParts[j].id != updatedId) {
                                this.updatedParts.push(deepCopiedPart)
                            }
                        }
                    }

                    
                    // Update the part in the allMyParts list
                    this.allMyParts[x].partName = updatePartName
                    this.allMyParts[x].partCategory = updatePartCategory
                    this.allMyParts[x].partPrice = updatePartPrice
                    
                    return this.updatedParts


                } else if ((x + 1) == this.allMyParts.length && this.allMyParts[x].id != updatedId) {
                    return "No part matching the given ID found"
                }
            }
        } else {
            return "Invalid Inputs"
        }
    }


    // Resets part back to the previous change
    // Changes only exist if the updatePart() function has been used
    revertPart(revertId) {
        // First check that the part has been previously updated, IE it exists in the updatedParts list
        for (var i = 0; i < this.updatedParts.length; i++) {
            if (this.updatedParts[i].id === revertId) {
                for (var j = 0; j < this.allMyParts.length; j++) {
                    if (this.allMyParts[j].id == revertId) {
                        var deepCopiedPart = this.deepCopy(this.allMyParts[j].id, this.allMyParts[j].partName, this.allMyParts[j].partCategory, this.allMyParts[j].partPrice)
                        this.allMyParts[j] = deepCopiedPart
                    } else if ((j + 1) == this.allMyParts.length && this.allMyParts[j].id != revertId) {
                        return "Part has been deleted from the allMyParts list"
                    }
                }
            } else if ((i + 1) == this.updatedParts.length && updatedParts[i].id != revertId) {
                return "No previous changes made to that part"
        }
        }
    }


    // Creates a deep copy of a part to use
    deepCopy(id, partName, partCategory, partPrice) {
        var deepCopiedPart = new Part(id, partName, partCategory, partPrice)
        return deepCopiedPart
    }


    // Used within other functions
    // Checks inputs are valid and expected
    validateInput(validateId, validatePartName, validatePartCategory, validatePartPrice) {
        if (typeof validateId == "number"){
            if (typeof validatePartName == "string") {
                if (typeof validatePartCategory == "string") {
                    if (typeof validatePartPrice == "number") {
                        return true
                    }
                }
            }
        }
        return false
    }


    // Calculate the cost of multiple units of a specific part
    calculateCost(id, quantity) {
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].id === id) {
                    return (this.allMyParts[i].partPrice * quantity)
            }
        }
    }

    // Calculate the average price of the parts
    calculateAveragePrice() {
        let totalCost = 0
        let averageCost = 0
        for (var i = 0; i < this.allMyParts.length; i++) {
            totalCost += this.allMyParts[i].partPrice
        }
        averageCost = (totalCost / this.allMyParts.length).toFixed(2)
        return parseFloat(averageCost)
    }

    // This returns the allMyParts and updatedParts arrays to their default values
    // allMyParts has 3 test parts, updatedParts is empty
    defaultValues() {
        this.allMyParts = []
        this.updatedParts = []
        this.addPart(1, "Test Part 1", "Bike Handle", 25.00)
        this.addPart(2, "Test Part 2", "Bike Spokes", 80.00)
        this.addPart(3, "Test Part 3", "Drink Bottle Holder", 15.00)
    }

    //finds a part of allMyParts by matching the part with input id
    findPart(targetPartId) {
        let foundPart
        for (var i = 0; i < this.allMyParts.length; i++) {
            if (this.allMyParts[i].id === targetPartId) {
            foundPart = this.allMyParts[i]
            }
        }
        return foundPart
    }

    // Returns a string of all parts
    getAllParts() {
        let result = ""
        for (let i = 0; i < this.allMyParts.length; i++) {
            result += this.allMyParts[i].partName
        }

        return result
    }
}
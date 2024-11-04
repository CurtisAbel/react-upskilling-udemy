const { deleteFromList} = require("./helper")

describe("TODOs", () => {
    test("Should be able o delete from a list of things in an array", () => {
        const originalList = ["a", "b", "c"]
        const expectedList = ["a", "c"]
        const indexToDelete = 1
        expect(deleteFromList(originalList, indexToDelete)).toEqual(expectedList)
    })
})
const enhancer = require('./enhancer.js');
// test away!

describe("repair", () => {
  it("has a durability of 100", () => {
    const item = {
      name: "John",
      durability: 90,
      enhancement: 10,
    }
    const expectedItem = {
      name: "John",
      durability: 100,
      enhancement: 10,
    }
    const newItem = enhancer.repair(item)
    expect(newItem.durability).toBe(expectedItem.durability)
  })
})

describe("success", () => {
  it("did the enhancement increase by 1", () => {
    const item = {
      name: "John",
      durability: 90,
      enhancement: 9,
    }
    const expectedItem = {
      name: "John",
      durability: 100,
      enhancement: 10,
    }
    const newItem = enhancer.success(item)
    expect(newItem.enhancement).toBe(expectedItem.enhancement)
  })
})

describe("fail", () => {
  it("is durability decreased by 5", () => {
    const item = {
      name: "John",
      durability: 90,
      enhancement: 10,
    }
    const expectedItem = {
      name: "John",
      durability: 85,
      enhancement: 10,
    }
    const newItem = enhancer.fail(item)
    expect(newItem.durability).toBe(expectedItem.durability)
  })
  it("is durability decreased by 10 and enhancement decreased by 1", () => {
    const item = {
      name: "John",
      durability: 90,
      enhancement: 17,
    }
    const expectedItem = {
      name: "John",
      durability: 80,
      enhancement: 16,
    }
    const newItem = enhancer.fail(item)
    expect(newItem.durability).toBe(expectedItem.durability)
    expect(newItem.enhancement).toBe(expectedItem.enhancement)  
  })
})
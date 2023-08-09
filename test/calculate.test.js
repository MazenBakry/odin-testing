import {add,subtract,multiply,divide} from "../script/calculate"

test("Adds 1 + 2 to equal 3", () =>{
    expect(add(1,2)).toEqual(3);
})
test("Subtracts 1 - 2 to equal -1", () =>{
    expect(subtract(1,2)).toEqual(-1);
})
test("Multiplys 1 x 2 to equal 2", () =>{
    expect(multiply(1,2)).toEqual(2);
})
test("Divides 1 / 2 to equal 0.5", () =>{
    expect(divide(1,2)).toEqual(0.5);
})
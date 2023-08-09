import capitalize from "../script/capitalize";

test("Returns string with first letter capitalized",()=>{
    expect(capitalize("mazen")).toBe("Mazen");
})
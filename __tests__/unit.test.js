// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phone number test
test("check for valid phone number", () => {
    expect(functions.isPhoneNumber("888-888-8888")).toBe(true);
});
test("check for valid phone number", () => {
    expect(functions.isPhoneNumber("999-999-9999")).toBe(true);
});
test("check for invalid phone number", () => {
    expect(functions.isPhoneNumber("999999")).toBe(false);
});
test("check for invalid phone number", () => {
    expect(functions.isPhoneNumber("912736487kaiusdg")).toBe(false);
});
// email test
test("check for valid  email", () => {
    expect(functions.isEmail("powell@gmail.com")).toBe(true);
});
test("check for valid  email", () => {
    expect(functions.isEmail("99sf@whatisthis.com")).toBe(true);
});
test("check for invalid  email", () => {
    expect(functions.isEmail("999-999-9")).toBe(false);
});
test("check for invalid  email", () => {
    expect(functions.isEmail("sadfolijhnvasjd9")).toBe(false);
});
// test strong password
test("check for strong password", () => {
    expect(functions.isStrongPassword("sfwhatistcom")).toBe(true);
});
test("check for strong password", () => {
    expect(functions.isStrongPassword("professorpowell")).toBe(true);
});
test("check for weak password", () => {
    expect(functions.isStrongPassword("1sssssss")).toBe(false);
});
test("check for weak password", () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});
// test date
test("check for valid date", () => {
    expect(functions.isDate("01/12/4987")).toBe(true);
});
test("check for valid date", () => {
    expect(functions.isDate("1/2/1111")).toBe(true);
});
test("check for invalid date", () => {
    expect(functions.isDate("1234/2/1111")).toBe(false);
});
test("check for invalid date", () => {
    expect(functions.isDate("1/2/111")).toBe(false);
});
// test hexcolor
test("check for valid color", () => {
    expect(functions.isHexColor("c5b9cd")).toBe(true);
});
test("check for valid color", () => {
    expect(functions.isHexColor("cbd")).toBe(true);
});
test("check for invalid color", () => {
    expect(functions.isHexColor("c222b3d")).toBe(false);
});
test("check for invalid color", () => {
    expect(functions.isHexColor("2130984689")).toBe(false);
});

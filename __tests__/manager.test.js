const Manager = require("../lib/Manager");

test("can initiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor argument", () => {
    const name = "Diane";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("can set id via constructor argument", () => {
    const testValue = 4;
    const e = new Manager("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email via constructor argument", () => {
    const testValue = "diane@foomail.com";
    const e = new Manager("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can get name via getName()", () => {
    const testValue = "Diane";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId()", () => {
    const testValue = 4;
    const e = new Manager("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can get email via getEmail()", () => {
    const testValue = "diane@foomail.com";
    const e = new Manager("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Diane", 1, "diane@foomail.com");
    expect(e.getRole()).toBe(testValue);
});
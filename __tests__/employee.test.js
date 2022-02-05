const Employee = require("../lib/Employee");

test("can initiate employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor argument", () => {
    const name = "Diane";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("can set id via constructor argument", () => {
    const testValue = 4;
    const e = new Employee("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email via constructor argument", () => {
    const testValue = "diane@foomail.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can get name via getName()", () => {
    const testValue = "Diane";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId()", () => {
    const testValue = 4;
    const e = new Employee("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can get email via getEmail()", () => {
    const testValue = "diane@foomail.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Diane", 1, "diane@foomail.com");
    expect(e.getRole()).toBe(testValue);
});
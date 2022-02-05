const Intern = require("../lib/Intern");

test("can initiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor argument", () => {
    const name = "Diane";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test("can set id via constructor argument", () => {
    const testValue = 4;
    const e = new Intern("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email via constructor argument", () => {
    const testValue = "diane@foomail.com";
    const e = new Intern("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can get name via getName()", () => {
    const testValue = "Diane";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId()", () => {
    const testValue = 4;
    const e = new Intern("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can get email via getEmail()", () => {
    const testValue = "diane@foomail.com";
    const e = new Intern("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Diane", 1, "diane@foomail.com");
    expect(e.getRole()).toBe(testValue);
});
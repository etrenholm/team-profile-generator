const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Erica','1','erica@gmail.com');

    expect(employee.name).toBe('Erica')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('erica@gmail.com')
});

test("gets employee's name", () => {
    const employee = new Employee('Erica','1','erica@gmail.com');

    expect(employee.getName()).toBe('Erica')
});

test("gets employee's id number", () => {
    const employee = new Employee('Erica','1','erica@gmail.com');

    expect(employee.getId()).toBe('1')
});

test("gets employee's email address", () => {
    const employee = new Employee('Erica','1','erica@gmail.com');

    expect(employee.getEmail()).toBe('erica@gmail.com')
});

test("gets employee's role or job title", () => {
    const employee = new Employee('Erica','1','erica@gmail.com');

    expect(employee.getRole()).toBe('Employee')
});
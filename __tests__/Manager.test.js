const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jane','1','jane@gmail.com','1');

    expect(manager.name).toBe('Jane');
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('jane@gmail.com')
    expect(manager.officeNumber).toBe('1')
});

test("gets manager's name", () => {
    const manager = new Manager('Jane','1','jane@gmail.com','1');

    expect(manager.getName()).toBe('Jane')
});

test("gets manager's id number", () => {
    const manager = new Manager('Jane','1','jane@gmail.com','1');

    expect(manager.getId()).toBe('1')
});

test("gets manager's email address", () => {
    const manager = new Manager('Jane','1','jane@gmail.com','1');

    expect(manager.getEmail()).toBe('jane@gmail.com')
});

test("gets manager's role or job title", () => {
    const manager = new Manager('Jane','1','jane@gmail.com','1');

    expect(manager.getRole()).toBe('Manager')
});
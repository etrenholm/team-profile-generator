const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe(3)
    expect(engineer.email).toBe('bob@gmail.com')
    expect(engineer.gitHub).toBe('bobhub')
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.getName()).toBe('Bob')
});

test("gets engineer's id number", () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.getId()).toBe(3)
});

test("gets engineer's email address", () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.getEmail()).toBe('bob@gmail.com')
});

test("gets engineer's github's username", () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.getEmail()).toBe('bob@gmail.com')
});

test("gets engineer's role or job title", () => {
    const engineer = new Engineer('Bob', 3, 'bob@gmail.com', 'bobhub');

    expect(engineer.getRole()).toBe('Engineer')
});

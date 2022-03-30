const Intern = require('../lib/Intern');

test("creates an intern object", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.name).toBe('Mary');
    expect(intern.id).toBe(4)
    expect(intern.email).toBe('mary@gmail.com')
    expect(intern.school).toBe('Uconn')
});

test("gets intern's name", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.getName()).toBe('Mary')
});

test("gets intern's id number", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.getId()).toBe(4)
});

test("gets intern's email address", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.getEmail()).toBe('mary@gmail.com')
});

test("gets intern's school", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.getSchool()).toBe('Uconn')
});

test("gets intern's role or job title", () => {
    const intern = new Intern('Mary', 4, 'mary@gmail.com', 'Uconn');

    expect(intern.getRole()).toBe('Intern')
});

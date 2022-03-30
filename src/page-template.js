
const generateCards = employees => {

    let employeeCards = ''

    for(let i = 0; i < employees.length; i++) {
        console.log(i)
        if(employees[i].getRole() === "Manager") {
            employeeCards += `
            <div class="card">
            <div class="card-header">
                <h2><i class="fa-solid fa-briefcase"></i>${employees[i].name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="card-section">
                <div class="card-info-section">
                    <p>ID: ${employees[i].getId()}</p>
                </div>
                <div class="card-info-section">
                    <p>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></p>
                </div>
                <div class="card-info-section">
                    <p>Office Number: ${employees[i].getNumber()}</p>
                </div>
            </div>
        </div>
            `
        } 
        else if(employees[i].getRole() === "Engineer") {
            employeeCards += `
            <div class="card">
            <div class="card-header">
                <h2><i class="fa-solid fa-glasses"></i>${employees[i].name}</h2>
                <h3>Engineer</h3>
            </div>
            <div class="card-section">
                <div class="card-info-section">
                    <p>ID: ${employees[i].getId()}</p>
                </div>
                <div class="card-info-section">
                    <p>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></p>
                </div>
                <div class="card-info-section">
                    <p>GitHub Profile: <a href="https://github.com/${employees[i].getGithub()}" target="_blank">https://github.com/${employees[i].getGithub()}</a></p>
                </div>
            </div>
        </div>
        `
        }
        else if(employees[i].getRole() === "Intern") {
            employeeCards += `
            <div class="card">
            <div class="card-header">
                <h2><i class="fa-solid fa-graduation-cap"></i>${employees[i].name}</h2>
                <h3>Intern</h3>
            </div>
            <div class="card-section">
                <div class="card-info-section">
                    <p>ID: ${employees[i].getId()}</p>
                </div>
                <div class="card-info-section">
                    <p>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></p>
                </div>
                <div class="card-info-section">
                    <p>School: ${employees[i].getSchool()}</p>
                </div>
            </div>
        </div>
        `
        }
    }
    return employeeCards
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container">
            ${generateCards(employees)}
        </main>
    </body>
</html>`
}
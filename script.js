//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    
    let ageInput = document.getElementById('age').value;
    let nameInput = document.getElementById('name').value;

    // Check if the inputs are empty
    if (ageInput === '' || nameInput === '') {
        alert('Both fields are required.');
        return;
    }

    let age = parseInt(ageInput, 10);
    let name = nameInput.trim();

    processFormSubmission(age, name)
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});

function processFormSubmission(age, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });
}

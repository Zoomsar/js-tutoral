const fullName = "Peteeeeer Griffin";

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);

const email = "peter.griffindor@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let domain = email.slice(email.indexOf("@") + 1);
console.log(domain);
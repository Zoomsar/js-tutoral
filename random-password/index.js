const length = 100;
const includeLowerCASE = true;
const includeUpperCASE = false;
const includeNumbers = false;
const includeSymbols = false;

function generateRandomPassword(length, includeLowerCASE, includeUpperCASE, includeNumbers, includeSymbols) {
    const lowerCASE = 'abcdefghijklmnopqrstuvwxyz';
    const upperCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allowedChars = '';
    let password = '';


    allowedChars += includeLowerCASE ? lowerCASE : '';
    allowedChars += includeUpperCASE ? upperCASE : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    if(length <= 0){
        return '(password length must be greater than 0)';
    }

    if (allowedChars.length === 0) {
        return '(at least one character type must be included)';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = generateRandomPassword(length, includeLowerCASE, includeUpperCASE, includeNumbers, includeSymbols);
console.log('Generated Password:', password);
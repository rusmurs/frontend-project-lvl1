import readlineSync from 'readline-sync';


export function userName () {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
};
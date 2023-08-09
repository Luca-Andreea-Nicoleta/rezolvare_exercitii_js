//  1.	Să se creeze o funcție care returnează maximul dintre doua numere date. Funcția ar trebui sa primeasca doua argumente de tip number și să returneze maximul dintre cele doua. Rezultatul trebuie salvat intr-o alta variabila și afișat la consola. //

// PRIMUL MOD DE REZOLVARE //

function maxNumber(a, b) {
  if (a > b) {
    console.log(a + " este mai mare decat " + b);
  } else if (b > a) {
    console.log(b + " este mai mare decat " + a);
  } else {
    console.log(a + "si" + b + " sunt egale");
  }
}

const num1 = 10;
const num2 = 100;

maxNumber(num1, num2);

// AL DOILEA MOD DE REZOLVARE //

function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const maxResult = maxNumber(10, 25);
console.log("Maximul dintre cele două numere este: " + maxResult);

// 2.	Să se creeze o funcție care afișează la consola dacă un număr dat este par sau impar. Funcția trebuie sa primeasca ca parametru un număr ‘n’ și să afișeze in consola “este par” sau “este impar” în funcție de caz. (hint: operatorul % ne poate ajuta în acest caz). //

function parImpar(n) {
  if (n % 2 === 0) {
    console.log(n + " este numar par");
  } else {
    console.log(n + " este numar impar");
  }
}

const numar = 4;
parImpar(numar);

// 3.	Să se creeze o funcție care sa converteasca o valore data n, din grade Fahrenheit in grade Celsius. Formula pentru acest calcul este următoarea: ℃=(℉-32)/1.8 unde ℃ este valoarea care trebuie returnată și ℉ este valoarea primită ca argument de către funcție. //

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return Math.trunck(celsius);
}

const valoareFahrenheit = 68;
const valoareCelsius = fahrenheitToCelsius(valoareFahrenheit);

console.log(valoareFahrenheit + " °F sunt " + valoareCelsius + " grade °C");

/* 4.	Să se creeze un obiect ‘user’ cu următoarele proprietăți:
a.	name : string
b.	birthYear: number
  Să se creeze o funcție care primește ca argument obiectul dat și să se  calculeze o nouă proprietate age: number pe baza informațiilor primite care va reține varsta utilizatorului și o proprietate isAdult: boolean care va fi true dacă varsta > 18 sau false in caz contrar. Extra: Sa se adauge o condiție ca varsta sa nu poata depasi 100 de ani sau sa fie mai mica de 5 ani. */

// PRIMUL MOD DE REZOLVARE //

const user = {
  name: "John",
  birthYear: 1990,
};

function calculateAges(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function isAdult(age) {
  return age > 18;
}

function updateAgeAndIsAdult(userObject) {
  const age = calculateAges(userObject.birthYear);

  if (age >= 5 && age <= 100) {
    userObject.age = age;
    userObject.isAdult = isAdult(age);
  } else {
    console.log("Varsta trebuie să fie între 5 și 100 de ani.");
  }
}

updateAgeAndIsAdult(user);
console.log(user);

// AL DOILEA MOD DE REZOLVARE //

const user1 = {
  name: "John",
  birthYear: 1990,
};

function calculateAge(userObject) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userObject.birthYear;

  if (age >= 5 && age <= 100) {
    userObject.age = age;
    userObject.isAdult = age > 18;
  } else {
    console.log("Varsta trebuie să fie între 5 și 100 de ani.");
  }
}

calculateAge(user1);
console.log(user1);

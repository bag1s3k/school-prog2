console.log("Hello, World!");
console.warn("Hello, World!");
console.error("Hello, World!");
console.info("Hello, World!");
console.debug("Hello, World!");


/*****************************************************************/
// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.

var num1 = parseFloat(prompt("1. Cislo: "))
var num2 = parseFloat(prompt("2. Cislo: "))
console.log("soucet " + (num1 + num2))

/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/* 
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/

console.log("Sude? " + (num1 % 2 == 0))

/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/

console.log("°C -> F: " + (num1 * 9/5 + 32))    

/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/

if (num1 < 0) {
    console.log("zaporne")
} else if (num1 == 0) {
    console.log("nula")
} else {
    console.log("kladne")
}

/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/

word = prompt("Zadej slovo")
console.log("obasujuje a? " + word.includes("a"))
 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/

let abc = "abcdefghijklmnopqrstuvwxyz";

console.log("Slovo: " + word)
for (let letter of abc) {
    if (word.includes(letter)) {
        let amount = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                amount++;
            }
        }
        console.log(letter + ": " + amount);
    }
}

/*****************************************************************/
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/

function privocilo(n) {
    if (n <= 1) return false;
    if (n <= 3) return false;
    for (var i = 5; i * i <= n; i += 6) {
        if (n % 2 == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}
console.log("Prvocislo? " + privocilo(num1))

/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**

 

let x = 10; // globální scope

 

function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}

 

prikladScope();
console.log("Globální x: " + x); // 10

 

/*****************************************************************/
// Příklad **redeclaration proměnné**

 

var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10

 

// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci

 

/*****************************************************************/
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ
let final = 1;

while (true) {
    let number = parseInt(prompt("Zadej cislo (pro ukonceni 0): "))
    if (number === 0) break;
    final *= number;
}

console.log(`Soucin je: ${final}`)
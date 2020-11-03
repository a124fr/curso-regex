const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ù]+/gi));

// Positivo lookhead
console.log(texto.match(/[\wÀ-ù]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ù]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ù]+(?=, mas)/gi));

// Negativo lookhead
console.log(texto.match(/[\wÀ-ù]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ù]+[\s|\.](?!,)/gi));

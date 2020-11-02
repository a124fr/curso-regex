const texto = 'Bom\ndia';
console.log(texto.match(/./gi));
console.log(texto.match(/.../gi));// o ponto não engloba o \n

// dotall - alguns linguagens tem um flag /minha-expressão./s, mas JS não!


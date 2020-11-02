const texto = '.$+*?-';

// dentro do conjunto os metacarecteres se comportam como caracteres literais
// não precisa de escape dentro do conjunto obs: mas não todos alguns são necessários.
console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[+.?*$]./g));
console.log(texto.match(/[$-?]/g));// isso é um intervalo (range)

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// pode precisar de escape dentro do conjunto: - [ ] ^

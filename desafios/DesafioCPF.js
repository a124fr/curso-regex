const texto = `
CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23 
    - 454.674.333-21
    - 678.987.123-87
    - 789.112.543-00
`;
//console.log(texto.match(/...\....\....-../g));
//console.log(texto.match(/[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]-[0-9]{2}/g));
//console.log(texto.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g));
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));


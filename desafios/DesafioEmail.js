const texto = 
`Os e-mails dos convidados são:
     - fulano@cod3r.com.br
     - xico@gmail.com 
     - joao@empresa.info.br
     - maria_silva@registro.br
     - rafa.sampio@yahoo.com
`;

//console.log(texto.match(/.{1,}@.{1,}/g));
//console.log(texto.match(/\w{1,}@\w{1,}/g));
//console.log(texto.match(/\w+@\w+/g));
// solução prof.
//console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g));
//console.log(texto.match(/\w+@\w+\.\w{2,4}/g));
//console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

// futuro - usando grupos
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{0,2})?/g));

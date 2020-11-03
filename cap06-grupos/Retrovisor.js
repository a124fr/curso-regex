const texto1 = '<b>Destaque</B><strong>Forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/gi));

const texto2 = 'Lentamente é mente muito lenta.';
console.log(texto2.match(/(lenta)(mente).*/gi));
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));

// Grupos que não armazena o conteúdo para usar o retrovisor
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));// ?: não guarda o valor

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'));

const texto3 = 'abcdefghijkll';
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));

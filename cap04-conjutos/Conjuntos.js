const texto = '1,2,3,4,5,6,10,a.b c!d?e[!';

// para definir um class (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]/g;
console.log(texto2.match(regexComESemAcento));






var str = "Я люблю JavaScript!"; // будем искать в этой строке
var regexp = /ЛЮ/i;
console.log( str.search(regexp) ); // 2




// 1
// флаги
// i - Если этот флаг есть, то регэксп ищет независимо от регистра, то есть не различает между А и а.
// g - Если этот флаг есть, то регэксп ищет все совпадения, иначе – только первое.
// m -Многострочный режим.
// var regexp = new RegExp("шаблон", "флаги");
// or
// regexp = /шаблон/;
// regexp = /шаблон/gmi;

// https://learn.javascript.ru/regular-expressions-javascript

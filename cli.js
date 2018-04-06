//region catch error
// Чтобы "поймать" и обработать ошибку в виде исключения (например,
// при попытке чтения несуществующего файла) и продолжить
// дальнейшую работу, используется обычный блок try..catch.
try {
  throw new Error('my silly error');
} catch (err) {
  console.error(err);
}
// Также можно установить глобальный обработчик исключений.
//   Обратите внимание, что после выполнения этого обработчика
// программа будет завершена!.

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

// Продвинутым новым и пока еще нестабильным способом обработки
// ошибок является использование модуля domain .  Основное
// преимущество этого метода в том, что можно создать несколько
// различных областей (доменов), которые будут обрабатывать ошибки
// аналогично process.on('uncaughtException', callback) но с той разницей,
//   что программа будет продолжать работу и вы получите доступ к
// информации о стеке вызова в месте возникновения ошибки..

var d = require('domain').create();
d.on('error', function (er) {
  console.error('Caught error!', er);
});
d.run(function () {
  process.nextTick(function () {
    setTimeout(function () { // simulating async stuff
      fs.open('non-existent ﬁle', 'r', function (er, fd) {
        if (er) throw er;
        // proceed...
      });
    }, 100);
  });
});
//endregion

//region fs
/*
var fs = require('fs');
.
fs.exists(path, callback) - проверка существования файла.
fs.readFile(ﬁlename, [options], callback) - чтение файла целиком.
fs.writeFile(ﬁlename, data, [options], callback) - запись файла целиком.
fs.appendFile(ﬁlename, data, [options], callback) - добавление в файл.
fs.rename(oldPath, newPath, callback) - переименование файла.
fs.unlink(path, callback) - удаление файла.
 */
const fs = require('fs');

let path = './package1.json';
fs.exists(path, (exists) => {
  if (exists) {
    fs.readFile(path, (err, data) => {
      console.log(data.toString());
    });
    let file = fs.readFileSync(path);
    console.log(file.toString());
  }
});
//endregion

//region readline
// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin, // ввод из стандартного потока
//   output: process.stdout // вывод в стандартный поток
// });
//
// rl.on('line', (line) => {
//   console.log('You typed %s', line);
//
//   if(line === 'exit'){
//     rl.close();
//   }
// });
//endregion

// console.log(process.env);

// stdin - вход
// stdout - выход
// stderr - ошибки

//region minimist argv
/*
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
 */
// const argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);
//endregion

//region argv
// node cli.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
// [ '-x',
//   '3',
//   '-y',
//   '4',
//   '-n5',
//   '-abc',
//   '--beep=boop',
//   'foo',
//   'bar',
//   'baz' ]
// console.log(process.argv.slice(2));
//endregion



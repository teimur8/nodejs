
// Пример отправки GET запроса:
/*
• автоматическая обработка JSON,
• работа с учетом редиректов или без них через опцию followRedirects,
• поддержка Basic Auth через опцию auth,
• поддержка OAuth через опцию oauth,
• поддержка прокси через опцию proxy,
• поддержка cookies через опцию jar: true,
co-request такой же но с Promises
 */
var request = require('request');
request('http://www.google.com', function (error, response, body) {
 if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
     }
});
// Пример отправки POST запроса:,
var request = require('request');
request({
   method: 'POST',
 uri: 'http://google.com',
 form:{key: 'value'},
}, function (error, response, body) {
 if (error) {
    console.error(error);
   } else {
    console.log(body);
    console.log(response.statusCode);
   }
});



// не используется обычно, есть более удобные замены
// const http = require('http');
// const https = require('https');
//
//
// http.get('http://ya.ru', res =>{
//   console.log(res.statusCode);
// }).on('error', err => {
//   console.log(err);
// });
//
//
// https.get('https://ya.ru', res =>{
//   console.log(res.statusCode);
// }).on('error', err => {
//   console.log(err);
// });

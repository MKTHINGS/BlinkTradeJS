var moment = require('moment');
var BlinkTradeRest = require('blinktrade').BlinkTradeRest;

var BlinkTrade = new BlinkTradeRest({
  prod: true,
  key: 'Ya8EkJ1kJSLyt5ZX60aWlmA7zPEgBqajt7UmvCZEvaA',
  secret: 'xUS4e9hEl1RGpj4Fmh4KvQYKMWT2yItG9SGlDx4aYfo',
  currency: 'BRL',
});

var since = moment()
  .subtract(2, 'days')
  .toDate()
  .getTime()
  .toString()
  .slice(0, 10);

BlinkTrade.trades(1000, since).then(function(data) {
  console.log('Trades', data);
});
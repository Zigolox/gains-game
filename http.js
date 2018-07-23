var request = require('request');

var data = {
    chartResolution: "MINUTE",
    chartType: "AREA",
    navigator: true,
    orderbookId: 563966,
    owners: false,
    percentage: false,
    ta: [],
    timePeriod: "today",
    volume: false,
    widthOfPlotContainer: 558,
  }

request({
    url: "https://www.avanza.se/ab/component/highstockchart/getchart/orderbook",
    method: "POST",
    json: true,
    body: data,
    origin: 'https://www.avanza.se'
}, function (error, response, body){
    console.log(body);
});
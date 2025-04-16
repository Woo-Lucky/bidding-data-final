var express = require("express");
var app = express();

app.get("/bidding", function (req: any, res: any) {
  const { serviceKey, numOfRows, pageNo, inqryBgnDt, inqryEndDt, inqryDiv, bidNtceNm} =
  //const { serviceKey, numOfRows, pageNo, inqryDiv, bidNtceNm} =  
    req.query;

  var api_url =
    "http://apis.data.go.kr/1230000/ad/BidPublicInfoService/getBidPblancListInfoCnstwkPPSSrch";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { serviceKey, numOfRows, pageNo, inqryBgnDt, inqryEndDt, inqryDiv, bidNtceNm},
    gzip: true,
    Headers: {
      "Accept-Encoding": "identity",
    },
    //qs: { serviceKey, numOfRows, pageNo, inqryDiv, bidNtceNm},
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/bidding?serviceKey=snOlXoqmO%2BAuj39eC%2BRSnF27Y7g8dM%2Bg4YxudtLaq5664xOw1XdFW6JMGQE1Fi%2F3981bQGnKsooawG67Jn0zTg%3D%3D&inqryDiv=1&inqryBgnDt=202504110000&inqryEndDt=202504112359&pageNo=1&numOfRows=10&bidNtceNm= app listening on port 3000!"
    //"http://127.0.0.1:3000/bidding?serviceKey=snOlXoqmO%2BAuj39eC%2BRSnF27Y7g8dM%2Bg4YxudtLaq5664xOw1XdFW6JMGQE1Fi%2F3981bQGnKsooawG67Jn0zTg%3D%3D&inqryDiv=1&pageNo=1&numOfRows=9999 app listening on port 3000!"
  );
});
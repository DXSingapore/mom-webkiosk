var express = require('express');
var router = express.Router();

// var builder = require('botbuilder');

// var connector = new builder.ChatConnector({
//   appId: process.env.MICROSOFT_APP_ID,
//   appPassword: process.env.MICROSOFT_APP_PASSWORD
// });

// var bot = new builder.UniversalBot(connector);

// var documentClient = require("documentdb").DocumentClient;
// var client = new documentClient(process.env.HOST, { "masterKey": process.env.AUTHKEY });
// var databaseUrl = `dbs/${process.env.DATABASEID}`;
// var collectionUrl = `${databaseUrl}/colls/${process.env.COLLECTIONID}`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.post('/notify', function(req, res, next) {
//   // Get all addresses from documentdb
//   var addresses = queryCollection(function (docs){
//     docs.forEach(function (addr) {
//       sendProactiveMessage(req.body.message, addr);
//     });
//     res.render('notify', { title: 'Send Notification' });
//   });
//   // res.send(addresses);
//   // res.render('notify', { title: 'Send Notification' });
// });

// // Get all addresses
// // https://docs.microsoft.com/en-us/azure/cosmos-db/documentdb-nodejs-samples
// function queryCollection(callback) {
//     console.log(`Querying collection through index:\n${process.env.COLLECTIONID}`);

//     var queryIterator = client.readDocuments(collectionUrl).toArray(function (err, docs) {
//         if (err) {
//             console.log(err);
        
//         } else {
//             console.log(docs.length + ' Documents found');
//             callback(docs);
//         }
//     });
// };

// function sendProactiveMessage(text, addr) {
//   var msg = new builder.Message().address(addr);
//   msg.text(text);
//   msg.textLocale('en-US');
//   bot.send(msg);
// }

module.exports = router;

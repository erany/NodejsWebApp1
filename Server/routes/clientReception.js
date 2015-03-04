

// var DB = require('mongodb');

// var ClientDB = DB.MongoClient;
// var Server = DB.Server;

// var mongoClient = new ClientDB(new Server('localhost' , 27017));
// var db; 

// mongoClient.open(function (err , mongoClient) {
	// db = mongoClient.db("angular-directory-db");
    
     // db.collection('employees' , { strict: true }, function (err, collection) {
         // if (err) {
             // console.log('erro in open employees');
         // }
     // });
 // });

 // exports.getList = function (req, res) {
     // db.collection('employees').find().toArray(function (err, items) { 
         // res.jasonp(items);
     // });
// };



 var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
     db;
 var mongoClient = new MongoClient(new Server('localhost', 27017));
 mongoClient.open(function (err, mongoClient) {
     db = mongoClient.db("angular-directory-db");
     db.collection('employees', { strict: true }, function (err, collection) {
         if (err) {
             console.log("The 'employees' collection doesn't exist. Creating it with sample data...");
             populateDB();
         }
     });
 });

 exports.getList = function (req, res) {
     var name = req.query["name"];
     db.collection('employees', function (err, collection) {
         if (name) {
             collection.find({ "fullName": new RegExp(name, "i") }).toArray(function (err, items) {
                 res.jsonp(items);
            });
         } else {
             collection.find().toArray(function (err, items) {
                 res.jsonp(items);
             });
         }
     });
 };
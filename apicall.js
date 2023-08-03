var clientid = "sb-e552b491-60af-4b9a-a80c-5664cac7fd52!b183062|it-rt-7e58d3aetrial!b26655";
var clientsecret = ":e2a1f3d2-3fd8-4e6e-bc34-cab97b8160c0$Tw-Uya0FVvc_sXFH7d_lcG6i0vNYqRvxigIpvmsWU0U=";

var cred = clientid.concat(clientsecret);
var clientsecretbase64 = btoa(cred);
var finalcred = "Basic " + clientsecretbase64;

var finaljson  = new Object();

var jsonobject = new Object();
jsonobject.name = 'Jason';
jsonobject.id = '100';
jsonobject.age = '30';

var nestedjson = new Object();
nestedjson.name = 'Emma';
nestedjson.id = '1';
nestedjson.age = '25';

jsonobject.spouse = nestedjson;
finaljson.details = jsonobject;

var myjson = JSON.stringify(finaljson);

var convert = require('xml-js');
// var json = require('fs').readFileSync('test.json', 'utf8');
var options = {compact: true, ignoreComment: true, spaces: 4};
var result = convert.json2xml(myjson, options);
console.log(result);

const express = require('express');
const mongoose = require('mongoose');

 const app = express()
 mongoose.connect('mongodb+srv://Kumarsom:Kumar%402017@cluster0.fziy5ze.mongodb.net/',{
    useNewUrlParser:true, useUnifiedTopology:true
 }
 );
 const connection = mongoose.connection;
 connection.once('open', () =>{
    console.log("MongoDB connection successful.");
    

    // let coll = mongoose.db('sample_geospatial').collection('shipwrecks');
    // let arrdata = coll.find({}).toArray();
    fetch("https://7e58d3aetrial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/demtcs_http",{
        method: "POST",
        body: result,
        headers: {
            "Content-type" : 'application/xml',
            "Authorization": finalcred,
            
        }
    })
    .then((response) => response.text())
    .then(xmlString => $.parseXML(xmlString))
    .then((data) => console.log(data))
   
    .catch((error) => console.error(error));
    // console.log(arrdata);
  
});

connection.close();

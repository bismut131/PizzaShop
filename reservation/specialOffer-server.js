
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('specialOffer.txt', 'utf8'));

var dataString = JSON.stringify(data);

fs.writeFileSync('specialOffer.json',dataString);






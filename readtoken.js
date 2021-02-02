var fs = require('fs');

var token="";
try {
    token = fs.readFileSync('/var/tmp/.token', 'utf8').replace(/(\r\n|\n|\r)/gm, ""); 
} catch(e) {
    console.log('ERROR: Can\'t read token!', e.stack);
    process.exit(1)
}

const getToken = () => {
  return token;
};

exports.getToken=getToken;
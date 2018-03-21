const express = require('express')
const session = require('express-session')
const app = express()
app.use(session({ secret: '289389329823kjekj8298', cookie: { maxAge: 60000 }}));
app.get('/', function(req, res) {
  var sessData = req.session;
  var sessval = sessData.someAttribute;
  res.write('<html>');
  res.write('<H2>Client Info</H2>');
  if  (sessval===undefined) {
	 res.write('No session attribute set, will be set on next request to steveo<br>');
	 sessData.someAttribute = 'steveo';
  } else {
	  res.write('Session value is set to ' + sessval + '<br>');
  }
  res.write('Your IP: ' + req.ip + '<br>');
  res.write('This Host is: ' + process.env.HOSTNAME);
  res.write('<table border=1 style="width:100%">');
  res.write('<tr>');
  res.write('<th align=left>Header</th><th align=left>Value</th>');
  res.write('</tr>');
  for(var item in req.headers) {
	res.write('<tr>');
    res.write('<td>' + item + '</td><td>'  + req.headers[item] + '</td>');
	res.write('</tr>');
  }
  res.write('</table>');
  res.end('</html>');
  });
app.listen(8080, () => console.log('Example app listening on port 8080!'))
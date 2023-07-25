const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// squarecloud uses port 80
// Web applications need at least 512Mb of RAM.
// If you see the error "BLOCKED Website..." wait 5 minutes
// and try again otherwise open a support ticket.
// Change the "DOMAIN" name in the squarecloud.app file to
// anything else before uploading the zip file.
app.listen(80, () => {
  console.log('Server is running go to "Network" tab to see your domain.');
});

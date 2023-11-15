const express = require('express');
const app = express();
const fs = require('fs');
const splashscreen = "C:\\ProgramData\\Jellyfin\\Server\\data\\splashscreen.png";
app.listen(27, () => {
    console.log(`The application is running on localhost:27!`);
});
const { createLogger, transports, format, Logger,winston } = require("winston")
const expressWinston = require('express-winston');
app.use(expressWinston.logger({
    transports: [
   
    new transports.Console({
              format: format.combine(format.simple(), format.colorize())
            }),
            new transports.File({
                name: 'info-file',
                filename: 'info.log',
                level: 'info'
            }),
    ],
    format: format.combine(
      format.colorize(),
      format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
app.get('/api/v1/splashscreen.png', async (req, res) => {
 //   const img = fs.readFileSync(splashscreen);
    const buffer = await Buffer.from(( fs.readFileSync(splashscreen)), 'binary');
    res.contentType('image/png');
    res.send(buffer);
});

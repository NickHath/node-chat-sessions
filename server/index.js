const express = require('express');
const bodyParser = require('body-parser');
const mc = require( `${__dirname}/controllers/messages_controller` );
const session = require('express-session');

const createInitialSession = require(`${__dirname}/middlewares/session.js`);

const app = express();

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../public/build` ) );
app.use( session({
  secret: 'afhd#f;a$%^2355245635123216890&*(dfsnf@@@9999!dsjkfha#!$#213214343@$!eiourhaewfs',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 10000
  }
  }) )

app.use( createInitialSession );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}`, mc.update );
app.delete( `${messagesBaseUrl}`, mc.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
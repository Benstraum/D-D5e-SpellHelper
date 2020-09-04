const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const spellRouter = require('./routes/spellRouter.js')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors jazz
//this will allow specified localhosts to interact with local server!!!
app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})
/* Routes */
app.use('/api/spells', spellRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
//set to run at expo server location
const hostname = '127.0.0.1'//'192.168.0.242'
const PORT = process.env.PORT || 5000;


/** Listen * */
app.listen(PORT,hostname, () => {
  console.log(`Listening on: ${hostname}:${PORT}`);
});

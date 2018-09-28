const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err=>console.log(err))

const port = process.env.PORT;
app.listen(port,()=>console.log(`We are running on port ${port}`));

app.get('/api/inventory',controller.getAll)
app.post('/api/inventory',controller.create)
app.delete('/api/inventory/:id',controller.delete)
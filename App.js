const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
require('dotenv').config();

const sequelize = require('./src/config/database');
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


async function serverUp(){
    await app.listen(PORT);
    console.log(`Server is running on PORT ${PORT} 👍`);
}

sequelize.sync()
    .then(value =>{
        console.log(`database is connected ▶️  🛢️`);
    })
    .catch(error => console.log('Error ⛔'));

app.use('/api/v1', require('./src/routes'));


serverUp();



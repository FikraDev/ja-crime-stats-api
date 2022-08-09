const express = require('express');
const crimeRoutes =require('./src/crimes/routes');
require('dotenv').config();


const app = express();

app.use(express.json())
app.use('/api/v0/crimes', crimeRoutes);

const PORT = process.env.PORT



app.listen(PORT, ()=>console.log("Server is up"))
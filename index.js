// index.js

const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/config.js')

// set up port
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// add routes
const router = require('./routes/router.js');
app.use('/api', router);

// run server
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));

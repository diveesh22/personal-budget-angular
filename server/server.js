const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
const budgetData = require('./budget-data.json');

app.use(cors());


app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
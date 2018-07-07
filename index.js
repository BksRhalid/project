const express = require('express');
const app = express();

app.get('/', (rea, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const formRoutes = require('./routes/form.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', formRoutes);

app.use((req, res) => {
    res.status(404).send({ message: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

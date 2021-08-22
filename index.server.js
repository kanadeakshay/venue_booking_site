const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

// Routes
const dealerAuthRoutes = require('./routes/dealer.auth');
const clientAuthRoutes = require('./routes/client.auth');
// const venueRoutes = require('./routes/venue');

// enviourment variables
env.config();

// mongodb connection
mongoose.connect(process.env.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Database Connected');
})

app.use(express.json());

app.use('/api', dealerAuthRoutes);
app.use('/api', clientAuthRoutes);
// app.use('/api', venueRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
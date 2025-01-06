// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

// MongoDB connection
(async () => {
    try {
        await mongoose.connect('mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/');
        console.log('Connected to MongoDB.');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
})();

// Define schemas and models
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const User = mongoose.model('User', userSchema);

const bookingSchema = new mongoose.Schema({
    userEmail: String,
    seats: Array,
});
const Booking = mongoose.model('Booking', bookingSchema);

const seatSchema = new mongoose.Schema({
    seatNumber: String,
    isBooked: Boolean,
});
const Seat = mongoose.model('Seat', seatSchema);

// Seed default user and seats data
(async () => {
    const userExists = await User.findOne({ email: '1@mail.ru' });
    if (!userExists) {
        await User.create({ email: '1@mail.ru', password: '123456' });
        console.log('Default user created.');
    }

    const seatExists = await Seat.findOne();
    if (!seatExists) {
        const seats = [];
        for (let wagon = 1; wagon <= 10; wagon++) {
            for (let seat = 1; seat <= 10; seat++) {
                seats.push({ seatNumber: `${wagon}-${seat}`, isBooked: false });
            }
        }
        await Seat.insertMany(seats);
        console.log('Seats initialized.');
    }
})();

// Create Express application
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Middleware to check authentication
function checkAuth(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Handle login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        req.session.user = user;
        res.redirect('/'); // Redirects to the home page
    } else {
        res.status(401).send('Invalid credentials.'); // Unauthorized for invalid login
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Home page
app.get('/', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Search page
app.get('/search', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/search.html'));
});

// Booking page
app.get('/bookingTrain', checkAuth, async (req, res) => {
    const seats = await Seat.find();
    res.render('booking.ejs', { seats });
});

app.post('/bookingTrain', checkAuth, async (req, res) => {
    const { selectedSeats } = req.body;
    const user = req.session.user;

    const seatNumbers = Array.isArray(selectedSeats) ? selectedSeats : [selectedSeats];

    const updatedSeats = await Promise.all(
        seatNumbers.map(async (seatNumber) => {
            const seat = await Seat.findOne({ seatNumber, isBooked: false });
            if (seat) {
                seat.isBooked = true;
                return seat.save();
            }
            return null;
        })
    );

    const successfulSeats = updatedSeats.filter(seat => seat);
    await Booking.create({ userEmail: user.email, seats: successfulSeats.map(seat => seat.seatNumber) });

    res.send(`Successfully booked seats: ${successfulSeats.map(seat => seat.seatNumber).join(', ')}`);
});

module.exports = app; // Export the app instance

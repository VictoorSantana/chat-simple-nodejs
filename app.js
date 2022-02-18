require('dotenv/config');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express'); //npm install express
const fileUpload = require('express-fileupload');

const cors = require('cors'); //npm i cors
const app = express();
const db = require('./app/config/connection');

db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// System imports
app.use('/api/user', require('./app/controllers/user/user.controller'));
app.use('/api/auth', require('./app/controllers/auth/auth.controller'));
app.use('/api/folder', require('./app/controllers/folder/folder.controller'));
app.use('/api/file', require('./app/controllers/file/file.controller'));

// Custom imports
app.use('/api/chat', require('./app/controllers/chat/chat.controller'));
app.use('/api/friend', require('./app/controllers/friend/friend.controller'));
app.use('/api/room', require('./app/controllers/room/room.controller'));
app.use('/api/room-participant', require('./app/controllers/roomParticipant/room-participant.controller'));
app.use('/api/request-friend', require('./app/controllers/requestFriend/request-friend.controller'));

app.use(function (req, res, next) {
    res.status(404);
    // respond with html page
    res.render('404', { url: req.url });
    return;
});

app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}...`);
});
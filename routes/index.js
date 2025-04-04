import express from 'express';
import messages from '../messages/message.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', (req, res) => {
    res.render('form')
});

router.post("/new", (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

router.get('/message/:id', (req, res) => {
    const message = messages[req.params.id];
    if (message) {
        res.render('message', { message });
    } else {
        res.status(404).send('Message not found');
    }
});

export default router;



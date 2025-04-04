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

export default router;



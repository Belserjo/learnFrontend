const jsonServer = require('json-server');
const fs = require('fs');
// const jwt = require('jsonwebtoken');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const PORT = 8000;
const DB_PATH = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, DB_PATH));

server.use(cors());
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// проверка авторизации
// eslint-disable-next-line

// Эндпоинт для логина
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(DB_PATH), 'UTF-8'));
    const { users } = db;
    const userFromDb = users.find(
        (user) => user.username === username && user.password === password,
    );
    console.log(userFromDb);
    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

server.use(router);

server.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});

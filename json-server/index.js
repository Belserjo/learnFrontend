const jsonServer = require('json-server');
const fs = require('fs');
// const jwt = require('jsonwebtoken');
const path = require('path');

const PORT = 8000;
const DB_PATH = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, DB_PATH));

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// проверка авторизации
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(DB_PATH), 'UTF-8'));
    const { users } = db;
    const userFromDb = users.find(
        (user) => user.name === username && user.password === password,
    );

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});

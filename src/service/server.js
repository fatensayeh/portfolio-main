import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';

const app = express();
app.use(cors());
const db = new Database('mydb.sqlite', { verbose: console.log }); // This will log all SQL queries

app.use(express.json()); // Middleware to parse JSON request bodies

// Create table if it doesn't exist
db.exec(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT,
  password TEXT
)`);
db.exec(`CREATE TABLE IF NOT EXISTS notes (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id INTEGER,
	title TEXT,
	body TEXT
  )`);

app.get('/users', (req, res) => {
  const items = db.prepare('SELECT * FROM users').all();
  res.json(items);
});

// Test route to verify server is working
app.get('/', (req, res) => {
	res.send('API is working');
  });

app.get('/user/:email', (req, res) => {
	const { email } = req.params;
	const item = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
	if (item) {
		res.json(item);
	} else {
		res.status(404).json({ error: 'User not found' });
	}
});
app.post('/users', (req, res) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res.status(400).json({ error: 'All fields are required' });
	}
	const stmt = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
	const info = stmt.run(username, email, password);
	res.status(201).json({ id: info.lastInsertRowid, username, email });
});

app.put('/users/:id', (req, res) => {
	const { id } = req.params;
	const { username, email, password } = req.body;
	const stmt = db.prepare('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?');
	const info = stmt.run(username, email, password, id);
	if (info.changes > 0) {
		res.json({ id, username, email });
	} else {
		res.status(404).json({ error: 'User not found' });
	}
});

app.delete('/users/:id', (req, res) => {
	const { id } = req.params;
	const stmt = db.prepare('DELETE FROM users WHERE id = ?');
	const info = stmt.run(id);
	if (info.changes > 0) {
		res.json({ message: 'User deleted successfully' });
	} else {
		res.status(404).json({ error: 'User not found' });
	}
});

app.get('/notes', (req, res) => {
	const items = db.prepare('SELECT * FROM notes').all();
	res.json(items);
});

app.get('/notes/:user_id', (req, res) => {
	const { user_id } = req.params;
	const items = db.prepare('SELECT * FROM notes WHERE user_id = ?').all(user_id);
	if (items) {
		res.json(items);
	} else {
		res.status(404).json({ error: 'No notes found for the given user_id' });
	}
});

app.post('/notes', (req, res) => {
	const { user_id, title, body } = req.body;
	if (!user_id || !title || !body) {
		return res.status(400).json({ error: 'All fields are required' });
	}
	const stmt = db.prepare('INSERT INTO notes (user_id, title, body) VALUES (?, ?, ?)');
	const info = stmt.run(user_id, title, body);
	res.status(201).json({ id: info.lastInsertRowid, user_id, title, body });
});

app.put('/notes/:id', (req, res) => {
	const { id } = req.params;
	const { user_id, title, body } = req.body;
	const stmt = db.prepare('UPDATE notes SET user_id = ?, title = ?, body = ? WHERE id = ?');
	const info = stmt.run(user_id, title, body, id);
	if (info.changes > 0) {
		res.json({ id, user_id, title, body });
	} else {
		res.status(404).json({ error: 'Note not found' });
	}
});

app.delete('/notes/:id', (req, res) => {
	const { id } = req.params;
	const stmt = db.prepare('DELETE FROM notes WHERE id = ?');
	const info = stmt.run(id);
	if (info.changes > 0) {
		res.json({ message: 'Note deleted successfully' });
	} else {
		res.status(404).json({ error: 'Note not found' });
	}
});


app.listen(3001, () => {
  console.log('Server running on http://139.59.149.92:3001');
});
import express from 'express';

const router = express.Router();

// Sample GET route (Fetch all users)
router.get('/', async (req, res) => {
  res.json({ message: '🧑‍🤝‍🧑 Fetching all users...' });
});

// Sample POST route (Create new user)
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `✅ User ${name} with email ${email} created!` });
});

export default router;

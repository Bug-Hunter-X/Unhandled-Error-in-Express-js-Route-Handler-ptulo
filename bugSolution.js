const express = require('express');
const app = express();
const users = {
  '1': { name: 'User 1' },
  '2': { name: 'User 2' }
};
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ userId, user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
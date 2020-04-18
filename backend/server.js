require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to RIPS');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

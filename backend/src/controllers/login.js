const firebase = require('firebase/app');

async function loginController(req, res) {
  const auth = firebase.auth();
  const { email, password } = req.body;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    res.status(200).json({ message: 'User logged in succesfuly' });
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = loginController;

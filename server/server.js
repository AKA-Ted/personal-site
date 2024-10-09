const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sendMail } = require('./mail/send-mail');


const app = express();

const port = 3000

/* parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

/* parse application/json */
app.use(bodyParser.json());

//===========================
// HABILITAR CARPETA PUBLIC
//===========================
app.use(express.static( path.resolve(__dirname, '../public')));


app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
      await sendMail({ name, email, subject, message });
      res.status(200).json({ message: 'Email enviado' });
  } catch (error) {
      res.status(500).json({ message: 'Error al enviar email', error });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
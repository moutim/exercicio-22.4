const express = require('express');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post(
  '/sales', 
  middlewares.sales.verifyName,
  middlewares.sales.verifyInfo,
  middlewares.sales.verifyDate,
  (req, res) => {
  // const { productName, infos } = req.body;

  res.status(200).json({ message: "POST DEU CERTO!" });
});

app.use(middlewares.handleError);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aplicacao rodando na porta ${PORT}`);
});
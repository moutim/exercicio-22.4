const express = require('express');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post(
  '/sales', 
  middlewares.sales.verifyName,
  middlewares.sales.verifyInfo,
  middlewares.sales.verifyDate,
  middlewares.sales.verifyWarrantyPeriod,
  (req, res) => {

  res.status(200).json({ message: "Venda cadastrada com sucesso" });
});

app.use(middlewares.handleError);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aplicacao rodando na porta ${PORT}`);
});
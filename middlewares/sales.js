const verifyName = (req, res, next) => {
  const { productName } = req.body;

  if (productName.length < 5) {
    throw { status: 403, message: "O campo productName deve ter pelo menos 4 caracteres" };
  }

  if (!productName) {
    throw { status: 400, message: "O campo productName é obrigatório" };
  }

  next();
};

const verifyInfo = (req, res, next) => {
  const { infos } = req.body;

  if (!infos) {
    throw { status: 400, message: "O campo infos é obrigatório" };
  }

  next();
};

const verifyDate = (req, res, next) => {
  const { infos } = req.body;

  if (!infos.saleDate) {
    throw { status: 400, message: "O campo saleDate é obrigatório" };
  }

  let date = infos.saleDate.split('/');
  console.log(date);

  if (date[0].length !== 2 || date[1].length !== 2 || date[2].length !== 4) {
    throw { status: 400, message: "O campo saleDate não é uma data válida" };
  }

  next();
};

const verifyWarrantyPeriod = (req, res, next) => {
  const { infos } = req.body;

  if (!infos.warrantyPeriod) {
    throw { status: 400, message: "O campo warrantyPeriod é obrigatório" };
  }

  if (infos.warrantyPeriod > 3 || infos.warrantyPeriod < 1) {
    throw { status: 400, message: "O campo warrantyPeriod precisa estar entre 1 e 3" };
  }

  next();
}

module.exports = {
  verifyName,
  verifyInfo,
  verifyDate,
  verifyWarrantyPeriod
}
const validateQuantity = async (req, res, next) => {
  const getQuantify = req.body;
  const getAndMap = await getQuantify.map((qtd) => qtd.quantity);
  if (getAndMap.includes(undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const getQuantityZero = getQuantify.some((zero) => zero.quantity <= 0);
  if (getQuantityZero) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};
module.exports = validateQuantity;
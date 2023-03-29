const validateProductId = async (req, res, next) => {
  const product = req.body;
  const getMapProduct = await product.map((pdt) => pdt.productId);
  // console.log('vaiii', getMapProduct);
  if (getMapProduct.includes(undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  
  next();
};
module.exports = validateProductId;
const venda = [
{
  productId: 1,
  quantity: 1,
},
  {
    productId: 2,
    quantity: 5,
  },
];

const ids = venda.filter((obj) => obj.productId);
console.log(ids); 

const interrogacoes = ids.map(() => '?');
const query = `SELECT * FROM products WHERE id IN (${interrogacoes.join(", ") })`;
/* console.log(query); */

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
// const quantify = { quantify }

const ids = venda.map((obj) => obj.quantity);
console.log(ids); 

// const interrogacoes = ids.map(() => '?');
// const query = `SELECT * FROM products WHERE id IN (${interrogacoes.join(", ") })`;
/* console.log(query); */

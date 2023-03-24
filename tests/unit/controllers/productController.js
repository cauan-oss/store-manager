/* const request = require('supertest');
const app = require('../../app');

describe('GET /products', () => {
  it('should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].name).toBe('Martelo de Thor');
    expect(response.body[1].name).toBe('Traje de encolhimento');
  });
});

describe('GET /products/:id', () => {
  it('should return a specific product', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Martelo de Thor');
  });

  it('should return a 404 status code for an invalid product id', async () => {
    const response = await request(app).get('/products/3');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Product not found');
  });
}); */
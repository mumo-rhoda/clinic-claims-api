const request = require('supertest');
const app = require('../src/app');
describe('patients', ()=> {
  test('create and list patients', async ()=> {
    const res = await request(app).post('/patients').set('x-api-key','changeme').send({
      name: 'Test User', phone: '+254700000000', appointment_date: '2025-10-03T10:00:00Z'
    });
    expect(res.statusCode).toBe(201);
    const list = await request(app).get('/patients');
    expect(list.statusCode).toBe(200);
    expect(Array.isArray(list.body)).toBe(true);
  }, 10000);
});

const request = require('supertest');
const app = require('./app');

describe('Integration Tests', () => {
    it('should return Hello, World! from GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!');
    });

});

import supertest from 'supertest';
import { MainApp } from '../src/app';

describe('Route not Found', () => {
  it('should return 404 when route not found', async () => {
    await supertest(MainApp).get('/random-982').expect(404).expect({ message: 'Route not found' });
  });
});

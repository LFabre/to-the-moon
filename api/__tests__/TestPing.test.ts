import supertest from 'supertest';
import { MainApp } from '../src/app';

describe('Ping', () => {
  it('Ping returns pong', async () => {
    await supertest(MainApp).get('/v1/ping').expect(200).expect({ message: 'pong' });
  });
});

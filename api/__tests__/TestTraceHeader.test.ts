import supertest from 'supertest';
import { MainApp } from '../src/app';
import { Config } from '../src/config';

const traceHeader = Config.request.traceHeader;
const traceMock = 'mocked-trace-uuid';

jest.mock('@utils/uuid', () => ({
  uuid: () => traceMock,
}));

describe('Trace Header', () => {
  test('Ensure trace header is returned', async () => {
    const res = await supertest(MainApp).get('/v1/ping');

    expect(res.status).toBe(200);
    expect(res.headers[traceHeader]).toBe(traceMock);
  });
});

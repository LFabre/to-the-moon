import { apiClient } from './setup';

describe('API Health Check', () => {
  it('should respond to ping endpoint', async () => {
    const response = await apiClient.get('/v1/ping');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message');
  });
});

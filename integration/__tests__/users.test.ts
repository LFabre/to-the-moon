import { apiClient } from './setup';

describe('Users API', () => {
  it('should first return an empty list', async () => {
    const response = await apiClient.get('/v1/users');

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ result: [], total: 0 });
  });

  it('should create a user', async () => {
    const response = await apiClient.post('/v1/users', { email: 'test@test.com' });

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({ id: 1, email: 'test@test.com' });
  });

  it('should get the user created in the previous test', async () => {
    const response = await apiClient.get('/v1/users');

    expect(response.status).toBe(200);
    expect(response.data.result[0]).toMatchObject({ id: 1, email: 'test@test.com' });
    expect(response.data.total).toBe(1);
  });

  it('should fail to insert user again', async () => {
    const response = await apiClient.post('/v1/users', { email: 'test@test.com' });

    expect(response.status).toBe(429);
    expect(response.data).toMatchObject({
      message: 'User already exists with this email',
      errorCode: 'RESOURCE_ALREADY_EXISTS',
    });
  });

  it('should get the user created in the previous test with query params', async () => {
    const response = await apiClient.get('/v1/users', {
      params: {
        page: 1,
        limit: 1,
      },
    });

    expect(response.status).toBe(200);
    expect(response.data.result[0]).toMatchObject({ id: 1, email: 'test@test.com' });
    expect(response.data.total).toBe(1);
  });
});

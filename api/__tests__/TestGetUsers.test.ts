import supertest from 'supertest';
import { MainApp } from '../src/app';
import { ModelUser } from '../src/database/models';

const mockFindAndCountAll = jest.spyOn(ModelUser, 'findAndCountAll');

describe('Get Users', () => {
  it('Should query 10 users when no query params are provided', async () => {
    mockFindAndCountAll.mockResolvedValue({
      count: 10,
      rows: Array(10)
        .fill(null)
        .map((_, i) => ({ toJSON: () => ({ id: i + 1, email: `test${i + 1}@test.com` }) })) as any,
    } as any);

    const response = await supertest(MainApp).get('/v1/users');

    expect(mockFindAndCountAll).toHaveBeenCalledWith({
      limit: 10,
      offset: 0,
      order: [['createdAt', 'DESC']],
    });
    expect(response.status).toBe(200);
    expect(response.body.result).toHaveLength(10);
    expect(response.body.total).toBe(10);
  });
});

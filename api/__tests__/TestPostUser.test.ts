import supertest from 'supertest';
import { MainApp } from '../src/app';
import { ModelUser } from '../src/database/models';
import { ErrorCodes } from '../src/errors';

const mockFindOne = jest.spyOn(ModelUser, 'findOne');
const mockCreate = jest.spyOn(ModelUser, 'create');

describe('Post User', () => {
  beforeEach(() => {
    mockFindOne.mockClear();
    mockCreate.mockClear();
  });

  it('Should create a user when the email is not already in use', async () => {
    mockFindOne.mockResolvedValue(null);
    mockCreate.mockResolvedValue({
      toJSON: () => ({ id: 1, email: 'test@test.com' }),
    } as any);

    const response = await supertest(MainApp).post('/v1/users').send({ email: 'test@test.com' });

    expect(mockFindOne).toHaveBeenCalledWith({ where: { email: 'test@test.com' } });
    expect(mockCreate).toHaveBeenCalledWith({ email: 'test@test.com' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, email: 'test@test.com' });
  });

  it('Should return 429 when the email is already in use', async () => {
    jest.spyOn(ModelUser, 'findOne').mockResolvedValue({
      toJSON: () => ({ id: 1, email: 'test@test.com' }),
    } as any);

    const response = await supertest(MainApp).post('/v1/users').send({ email: 'test@test.com' });

    expect(mockFindOne).toHaveBeenCalledWith({ where: { email: 'test@test.com' } });
    expect(mockCreate).not.toHaveBeenCalled();

    expect(response.status).toBe(429);
    expect(response.body.message).toBe('User already exists with this email');
    expect(response.body.errorCode).toBe(ErrorCodes.RESOURCE_ALREADY_EXISTS);
  });
});

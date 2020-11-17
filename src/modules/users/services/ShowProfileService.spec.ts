import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let showProfile: ShowProfileService;
let fakeUsersRepository: FakeUsersRepository;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const userShowed = await showProfile.execute({
      user_id: user.id,
    });

    expect(userShowed.name).toBe('John Doe');
    expect(userShowed.email).toBe('johndoe@example.com');
  });

  it('should not be able to show a profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existing user_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

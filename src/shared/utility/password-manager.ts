import * as bcrypt from 'bcryptjs';

export const generateHashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

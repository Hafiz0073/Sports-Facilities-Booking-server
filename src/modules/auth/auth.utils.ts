import bcryptjs from "bcryptjs";
export const isPasswordMatched = async (
  planePassword: string,
  hashPassword: string
) => {
  const isMatched = await bcryptjs.compare(planePassword, hashPassword);
  return isMatched;
};

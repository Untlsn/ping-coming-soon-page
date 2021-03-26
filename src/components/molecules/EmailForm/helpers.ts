export const testEmail = (email: string) => {
  if (email.length > 255) return false;
  const [, last] = email.split('@');
  return last && last.includes('.');
};

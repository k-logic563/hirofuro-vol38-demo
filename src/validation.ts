export const validatePassword = (password: string): boolean => {
  // パスワードのバリデーション
  // 6文字以上
  // 大文字小文字の英数字を含む
  // 記号を含む
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 6;

  return hasUppercase && hasLowercase && hasNumber && hasSymbol && hasLength;
}
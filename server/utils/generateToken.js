// Token generation placeholder. Replace with real JWT signing when implementing auth.
export function generateAccessToken(payload = {}) {
  // TODO: use jwt.sign with process.env.JWT_ACCESS_SECRET
  return 'ACCESS_TOKEN_PLACEHOLDER';
}

export function generateRefreshToken(payload = {}) {
  // TODO: use jwt.sign with process.env.JWT_REFRESH_SECRET
  return 'REFRESH_TOKEN_PLACEHOLDER';
}

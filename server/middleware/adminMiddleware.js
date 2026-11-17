// Placeholder admin middleware - no admin checks yet
export default function adminMiddleware(req, res, next) {
  // When implementing admin check, verify req.user.role or similar
  return next();
}

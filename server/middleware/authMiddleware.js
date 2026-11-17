// Placeholder auth middleware - no auth logic yet
export default function authMiddleware(req, res, next) {
  // When implementing auth, validate tokens here and attach user to req
  return next();
}

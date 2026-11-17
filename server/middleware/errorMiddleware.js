export default function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const response = {
    status: statusCode,
    success: false,
    message: err.message || 'Internal Server Error',
  };

  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
}

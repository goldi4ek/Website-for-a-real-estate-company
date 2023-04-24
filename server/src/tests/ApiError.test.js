const ApiError = require('../../error/ApiError');

describe('ApiError', () => {
  it('should have the correct status and message properties', () => {
    const error = ApiError.badRequest('Invalid input');
    expect(error.status).toEqual(404);
    expect(error.message).toEqual('Invalid input');
  });

  it('should have the correct status and message properties for internal server error', () => {
    const error = ApiError.internal('Internal Server Error');
    expect(error.status).toEqual(500);
    expect(error.message).toEqual('Internal Server Error');
  });

  it('should have the correct status and message properties for forbidden error', () => {
    const error = ApiError.forbidden('Access denied');
    expect(error.status).toEqual(403);
    expect(error.message).toEqual('Access denied');
  });
});

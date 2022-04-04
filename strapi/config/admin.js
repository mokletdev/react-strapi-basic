module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a84428d68d11ee87805bd3c6c956c121'),
  },
});

export default {
  jwt: {
    secret: process.env.APP_SECRET || 'DefaultSecret',
    expiresIn: '1d',
  },
};

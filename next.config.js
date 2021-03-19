// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isDevelopment,
  },
});

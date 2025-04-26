const app = require('./src/app');
const config = require('./src/utils/config');
const logger = require('./src/utils/logger');

app.listen(config.port, () => {
  console.log('testing workflow');
  logger.info(`Server running on port ${config.port}`);
});

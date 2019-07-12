const urlResolver = require('./url');
const groupResolver = require('./group');

const rootResolver = {
  ...groupResolver,
  ...urlResolver,
};

module.exports = rootResolver;
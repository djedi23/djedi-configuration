import nconf from 'nconf';

nconf
  .argv()
  .env({ separator: '__', lowerCase: true })
  .file({ file: 'config/config.json' });

export default nconf;

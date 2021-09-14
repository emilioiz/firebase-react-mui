if (process.env.FUNCTIONS_EMULATOR) {
  const { seedFirestore } = require('./lib/seedFirestore')
  exports.seedFirestore = seedFirestore
}

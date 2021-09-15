const { seedFirestore } = require('./lib/seedFirestore')
exports.seedFirestore = seedFirestore

// When running development only functions use code block below
// if (process.env.FUNCTIONS_EMULATOR) {
//   const { seedFirestore } = require('./lib/seedFirestore')
//   exports.seedFirestore = seedFirestore
// }

const { admin, functions } = require('./firebase')
const faker = require('faker')
faker.locale = 'en_US'

const googleGeoCodes = require('../data/googleGeoCodes.json')

const { dropCollection, setDocument } = require('./functions')

//get server local timestamp
const getTimestamp = () => {
  const currentTimestamp = admin.firestore.Timestamp.fromDate(new Date())
  return currentTimestamp
}

//do something X times
const times = (x) => (f) => {
  if (x > 0) {
    f()
    times(x - 1)(f)
  }
}

exports.seedFirestore = functions.https.onRequest(async (req, res) => {
  //Use to seed firestore from a local json file
  await dropCollection('googleGeoCodes')

  const googleGeoCodesKeys = Object.keys(googleGeoCodes)
  googleGeoCodesKeys.forEach(async (key) => {
    const data = {
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
      name: googleGeoCodes[key]
    }
    setDocument('googleGeoCodes', key, data)
  })

  //Use to seed firestore using faker
  await dropCollection('users')

  const createUser = () => {
    const firstName = faker.fake('{{name.firstName}}')
    const lastName = faker.fake('{{name.lastName}}')
    const fullName = firstName + ' ' + lastName

    const userObj = {
      firstName,
      lastName,
      fullName,
      email: faker.internet.email(),
      address:
        faker.address.streetAddress() +
        ', ' +
        faker.address.city() +
        ', ' +
        faker.address.stateAbbr() +
        ' ' +
        faker.address.zipCodeByState(),
      createdAt: getTimestamp(),
      updatedAt: getTimestamp()
    }

    return userObj
  }

  times(12)(async () => {
    const data = createUser()
    setDocument('users', false, data)
  })

  res.end()
})

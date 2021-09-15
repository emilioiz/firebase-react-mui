const { db } = require('./firebase')
const { error } = require('firebase-functions/lib/logger')

exports.dropCollection = async (collection) => {
  await db
    .collection(collection)
    .get()
    .then((response) => {
      return response.forEach((doc) => {
        doc.ref.delete()
      })
    })
    .catch((err) => error('dropCollection', err.message))
  return null
}

exports.setDocument = async (collection, docRef, data) => {
  if (docRef) {
    await db
      .collection(collection)
      .doc(docRef)
      .set(data)
      .catch((err) => error('setDocument', err.message))
  } else {
    await db
      .collection(collection)
      .doc()
      .set(data)
      .catch((err) => error('setDocument', err.message))
  }
  return null
}

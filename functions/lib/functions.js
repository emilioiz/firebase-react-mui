const { db } = require('./firebase')
const { error } = require('firebase-functions/lib/logger')

exports.dropCollection = async (collectionName) => {
  await db
    .collection(collectionName)
    .get()
    .then((response) => {
      return response.forEach((doc) => {
        doc.ref.delete()
      })
    })
    .catch((err) => error('dropCollection', err.message))
}

exports.setDocument = async (collectionName, docRef, data) => {
  if (docRef) {
    await db
      .collection(collectionName)
      .doc(docRef)
      .set(data)
      .catch((err) => error('setDocument', err.message))
  } else {
    await db
      .collection(collectionName)
      .doc()
      .set(data)
      .catch((err) => error('setDocument', err.message))
  }
}

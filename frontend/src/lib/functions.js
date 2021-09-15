import { db, serverTimestamp } from './firebase'
import { v4 as uuidv4 } from 'uuid'

export const setBrowserId = () => {
  if (!localStorage.getItem('browserId')) {
    const newBrowserId = uuidv4()
    localStorage.setItem('browserId', newBrowserId)
  }
}

export const setSessionIds = () => {
  const location =
    document.location.protocol +
    '//' +
    document.location.hostname +
    document.location.pathname +
    document.location.search

  sessionStorage.setItem('sessionId', uuidv4())
  sessionStorage.setItem('originalLocation', location)
}

export const setDocument = async (collection, docRef, data) => {
  if (docRef) {
    await db
      .collection(collection)
      .doc(docRef)
      .set({ ...data, created: serverTimestamp(), updated: serverTimestamp() })
      .catch((err) => console.error('setDocument', err.message))
  } else {
    await db
      .collection(collection)
      .doc()
      .set({ ...data, created: serverTimestamp(), updated: serverTimestamp() })
      .catch((err) => console.error('setDocument', err.message))
  }
}

export const getAllDocuments = async (collection) => {
  const docs = []
  await db
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ docId: doc.id, ...doc.data() })
      })
    })

  return docs
}

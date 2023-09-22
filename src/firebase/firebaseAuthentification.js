import { getAuth, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const createUserFirebase = (email, password) => {
  const auth = getAuth()
  setPersistence(auth, browserLocalPersistence)
    .then(() =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential
        })
        .catch(error => {
            console.log(error.code)
            alert(error.message)
        })
    })
    .catch(error => {
        console.log(error.code)
        alert(error.message)
    })
}

export const authenticateUser = (email, password) => {
  const auth = getAuth()
  setPersistence(auth, browserLocalPersistence)
    .then(() =>{
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return userCredential
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message)
        })
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message)
    })
}

export const logoutUser = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message)
    })
}
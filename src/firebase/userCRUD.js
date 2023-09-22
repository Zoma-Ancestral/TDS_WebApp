import { getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = getApp()
const db = getFirestore()
/*
export const testDb = () => {
  console.log(db)
}

export const createUser = async (user) => {
  try {
    const newUser = await app.getAuth().createUserWithEmailAndPassword(user.email, user.password);
    await usersCollection.doc(newUser.user.uid).set({
      displayName: user.displayName,
      email: user.email,
      // Additional user data
    });
    return newUser.user;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId) => {
  try {
    const userDoc = await usersCollection.doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
    await usersCollection.doc(userId).update(updatedData);
    return 'User updated successfully';
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await firebase.auth().currentUser.delete();
    await usersCollection.doc(userId).delete();
    return 'User deleted successfully';
  } catch (error) {
    throw error;
  }
};*/
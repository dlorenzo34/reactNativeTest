import { collection, getDocs } from 'firebase/firestore';
import { firebase_db } from '../FirebaseConfig';

export const getCollection = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(firebase_db, collectionName));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return data;
    } catch (error) {
      console.error('Error getting collection:', error);
      throw error;
    }
  };
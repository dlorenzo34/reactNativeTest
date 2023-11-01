import { doc, updateDoc } from 'firebase/firestore';
import { firebase_db } from '../FirebaseConfig';

const updateProductSoldOutStatus = async (productId, isSoldOut) => {
    const productRef = doc(firebase_db, "products", productId);

    return await updateDoc(productRef, {
      soldOut: isSoldOut,
    })
    .then(() => {
      console.log(`Product ${productId} 'soldOut' status updated to ${isSoldOut}`);
    })
    .catch((error) => {
      console.error('Error updating product:', error);
    });
  };
  
  export { updateProductSoldOutStatus };
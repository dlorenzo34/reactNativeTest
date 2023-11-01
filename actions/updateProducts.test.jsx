import { updateProductSoldOutStatus } from './updateProducts';
import { doc, updateDoc } from 'firebase/firestore';

const mockUpdateDoc = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  updateDoc.mockImplementation(mockUpdateDoc);
});

jest.mock('../FirebaseConfig', () => {
  const mockFirebaseDb = {};
  return {
    firebase_db: mockFirebaseDb,
  };
});

describe('updateProductSoldOutStatus', () => {
  it('updates the soldOut status of a product in Firestore', async () => {
    const productId = '47ygBU7ASqA1ekUJrTI6';
    const isSoldOut = true;

    mockUpdateDoc.mockResolvedValue();

    const result = await updateProductSoldOutStatus(productId, isSoldOut);

    expect(result).toBeUndefined();
    expect(updateDoc).toHaveBeenCalledWith(doc(mockFirebaseDb, 'products', productId), { soldOut: isSoldOut });
  });

  it('handles errors when updating the product', async () => {
    const productId = '47ygBU7ASqA1ekUJrTI6';
    const isSoldOut = false;
    const error = new Error('Firestore update error');

    mockUpdateDoc.mockRejectedValue(error);

    await expect(updateProductSoldOutStatus(productId, isSoldOut)).rejects.toThrow(error);
    expect(updateDoc).toHaveBeenCalledWith(doc(mockFirebaseDb, 'products', productId), { soldOut: isSoldOut });
  });
});

import { getCollection } from './getCollection';
import { collection, getDocs } from 'firebase/firestore';

const mockCollection = jest.fn();
const mockGetDocs = jest.fn();
const mockData = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
];

beforeEach(() => {
  jest.clearAllMocks();
  collection.mockImplementation(mockCollection);
  getDocs.mockImplementation(mockGetDocs);
});

jest.mock('../FirebaseConfig', () => {
  const mockFirebaseDb = {};
  return {
    firebase_db: mockFirebaseDb,
  };
});

describe('getCollection', () => {
  it('fetches and returns data from the Firestore collection', async () => {
    const mockQuerySnapshot = {
      forEach: (callback) => {
        mockData.forEach((item) => {
          callback({ id: item.id, data: () => item });
        });
      },
    };

    mockCollection.mockReturnValue({
      mock: 'products',
    });
    mockGetDocs.mockResolvedValue(mockQuerySnapshot);

    const result = await getCollection('products');

    expect(result).toEqual(mockData);
    expect(collection).toHaveBeenCalledWith(mockFirebaseDb, 'products');
    expect(getDocs).toHaveBeenCalledWith({
      mock: 'products',
    });
  });

  it('throws an error when there is an error fetching the collection', async () => {
    const error = new Error('Firestore error');
    mockGetDocs.mockRejectedValue(error);

    await expect(getCollection('products')).rejects.toThrow(error);
    expect(collection).toHaveBeenCalledWith(mockFirebaseDb, 'products');
    expect(getDocs).toHaveBeenCalledWith(expect.any(Object));
  });
});

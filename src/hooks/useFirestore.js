import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (collectionName) => {
  let ref = collection(db, collectionName);

  const addDocument = async (doc) => {
    try {
      const createdAt = Timestamp.fromDate(new Date());
      await addDoc(ref, { ...doc, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { addDocument };
};

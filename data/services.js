 import { collection, getDocs,getDoc,doc } from 'firebase/firestore';
 import { db } from '@/lib/firebase';

 export async function getServiceBySlug(slug) {
  console.log('Fetching service with slug:', slug);
  const docRef = doc(db, "services", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  console.log('docSnap.data()', docSnap.data());

  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}
 
 export async function getServices() {
  const servicesCollection = collection(db, 'services');
  const serviceSnapshot = await getDocs(servicesCollection);
  const serviceList = serviceSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return serviceList;
}



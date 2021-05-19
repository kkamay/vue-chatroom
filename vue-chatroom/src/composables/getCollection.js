import { ref } from "@vue/reactivity";
import { projectFirestore } from '@/firebase/config.js';

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');
    
    collectionRef.onSnapshot((snap) => {
        let results = [];

        snap.docs.forEach((doc) => {
            const data = doc.data();

            if (data.createdAt) {
                results.push({
                    ...data,
                    id: doc.id
                });
            }
        });

        documents.value = results;
        
        error.value = null;
    }, (err) => {
        documents.value = null;
        error.value = err.message;
    });

    return { documents, error }
};

export default getCollection
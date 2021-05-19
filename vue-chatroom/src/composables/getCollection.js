import { ref } from "@vue/reactivity";
import { projectFirestore } from '@/firebase/config.js';
import { watchEffect } from "@vue/runtime-core";

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');
    
    const unsub = collectionRef.onSnapshot((snap) => {
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

    // Unsubscribe from the collection when watcher is stopped.
    watchEffect((onInvalidate) => {
        onInvalidate(() => {
            unsub();
        });
    });

    return { documents, error }
};

export default getCollection
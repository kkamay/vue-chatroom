import { ref } from "@vue/reactivity";
import { projectFirestore } from '@/firebase/config.js';

const useCollection = (collection) => {
    const error = ref(null);

    const addDoc = async (doc) => {
        error.value = null;

        try {
            await projectFirestore.collection(collection).add(doc);
        } catch(err) {
            error.value = 'Could not add doc!';
        } 
    };

    return { error, addDoc }
};

export default useCollection
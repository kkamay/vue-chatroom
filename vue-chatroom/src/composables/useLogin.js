import { ref } from "@vue/reactivity";
import { projectAuth } from '@/firebase/config.js';

const error = ref(null);

const login = async (email, password) => {
    error.value  = null;
    
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);

        if (!res) {
            throw new Error('Could not complete login.');
        }
        
        error.value = null;

        return res;
    } catch (err) {
        error.value = 'Incorrect credentials...';
    }
};

const useLogin = () => {
    return { error, login }
};

export default useLogin
import { ref } from "@vue/reactivity";
import { projectAuth } from '@/firebase/config.js';

const error = ref(null);

const logout = async () => {
    error.value  = null;
    
    try {
        await projectAuth.signOut();
    } catch (err) {
        error.value = err.message;
    }
};

const useLogout = () => {
    return { error, logout }
};

export default useLogout
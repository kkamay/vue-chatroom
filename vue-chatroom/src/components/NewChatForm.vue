<template>
    <form>
        <MDBTextarea label="Type a message..." rows="4" v-model="message" @keypress.enter.prevent="sendMessage()" />
        <div class="note note-danger" v-if="error">
            {{ error }}
        </div>
    </form>
</template>

<script>
import { MDBTextarea } from 'mdb-vue-ui-kit'; 
import { ref } from 'vue';
import getUser from '@/composables/getUser.js';
import useCollection from '@/composables/useCollection.js';
import { timestamp } from '@/firebase/config.js';

export default {
    setup() {
        const message = ref('');
        const { user } = getUser();
        const { addDoc, error } = useCollection('messages');

        const sendMessage = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            };

            await addDoc(chat);

            if (!error.value) {
                message.value = '';
            }         
        };

        return { message, sendMessage, error }
    },
    components: {
        MDBTextarea
    }
}
</script>

<style>

</style>
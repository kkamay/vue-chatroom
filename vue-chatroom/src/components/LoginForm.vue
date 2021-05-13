<template>
    <form @submit.prevent="submit()">
        <MDBInput label="Email" type="email" v-model="email" required class="m-3" />
        <MDBInput label="Password" type="password" v-model="password" required class="m-3" />
        <MDBBtn color="success" type="submit" class="m-3">Log In</MDBBtn>
        <div class="note note-danger" v-if="error">
            {{ error }}
        </div>
     </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin.js';
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';

export default {
    setup(props, context) {
        const email = ref('');
        const password = ref('');

        const { error, login } = useLogin();

        const submit = async () => {
            await login(email.value, password.value);

            if (!error.value) {
                context.emit('login');
            }
        };

        return { email, password, submit, error }
    },
    components: {
        MDBInput,
        MDBBtn
    }
}
</script>
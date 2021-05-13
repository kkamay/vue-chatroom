<template>
    <form @submit.prevent="submit()">
        <MDBInput label="Email" type="email" v-model="email" required class="m-2" />
        <MDBInput label="Password" type="password" v-model="password" required class="m-2" />
        <MDBBtn color="success" type="submit" class="m-3">Log In</MDBBtn>
        <div class="error" v-if="error">
            {{ error }}
        </div>
     </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin.js';
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const { error, login } = useLogin();

        const submit = async () => {
          await login(email.value, password.value);

          if (!error.value) {
            console.log('User logged in.');
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
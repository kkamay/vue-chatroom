<template>
  <form @submit.prevent="submit()">
        <MDBInput label="Name" type="text" v-model="displayName" required class="m-3" />
        <MDBInput label="Email" type="email" v-model="email" required class="m-3" />
        <MDBInput label="Password" type="password" v-model="password" required class="m-3" />
        <MDBBtn color="success" type="submit" class="m-3">Sign Up</MDBBtn>
        <div class="note note-danger" v-if="error">
            {{ error }}
        </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup.js';
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';

export default {
    setup(props, context) {
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const { error, signup } = useSignup();

        const submit = async () => {
            await signup(email.value, password.value, displayName.value);

            if (!error.value) {
                context.emit('signup');
            }
        };

        return { displayName, email, password, submit, error }
    },
    components: {
        MDBInput,
        MDBBtn
    }
}
</script>
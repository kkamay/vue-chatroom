<template>
    <MDBContainer>
        <MDBCard class="mt-5 mx-auto w-50">
            <MDBCardBody class="p-5 text-center login-signup-form">
                <div v-if="showLogin">
                    <h2 class="mb-3">Login</h2>
                    <LoginForm @login="enterChatroom()" />
                    <p @click="changeForm()" class="form-text">No account yet? Sign up now!</p>
                </div>
                <div v-else>
                    <h2 class="mb-3">Signup</h2>
                    <SignupForm @signup="redirectToLogin()" />
                    <p @click="changeForm()" class="form-text">Already have an account? Log in now!</p>
                </div>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-vue-ui-kit';

export default {
    components: {
        SignupForm,
        LoginForm,
        MDBContainer,
        MDBCard,
        MDBCardBody
    },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();

        const changeForm = () => {
            showLogin.value = !showLogin.value;
        };

        const enterChatroom = () => {
            router.push({ name: 'Chatroom'});
        };

        const redirectToLogin = () => {
            showLogin.value = true;
        };

        return { showLogin, changeForm, enterChatroom, redirectToLogin }
    }
}
</script>

<style>
body {
    background-color: #F0F2F5;
}

.login-signup-form p {
    cursor: pointer;
}
</style>
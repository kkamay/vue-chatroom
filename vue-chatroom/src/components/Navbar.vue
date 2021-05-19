<template>
    <MDBNavbar expand="lg" light bg="light" container>
        <h6>Welcome! You are logged in as <strong>{{ user?.displayName }}</strong> ({{ user?.email }}).</h6>
        <MDBBtn color="danger" @click="logOut()" class="m-2">Log Out</MDBBtn>
    </MDBNavbar>
</template>

<script>
import { MDBNavbar, MDBBtn } from 'mdb-vue-ui-kit';
import useLogout from '@/composables/useLogout.js';
import getUser from '@/composables/getUser.js';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const { logout, error } = useLogout();
        const { user } = getUser();
        
        const logOut = async () => {
            await logout();

            if (!error.value) {
                router.push({ name: 'Welcome'});
            }
        };

        return { logOut, user }
    },
    components: {
        MDBNavbar,
        MDBBtn
    }
}
</script>

<style scoped>
h6 {
    margin-bottom: 0px;
}

strong {
    color: #00b74a;
}
</style>
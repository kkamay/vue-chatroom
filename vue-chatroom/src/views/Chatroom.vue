<template>
    <Navbar />
    <MDBCard class="mt-5 mx-auto w-50">
        <MDBCardBody class="p-5 text-center">
            <NewChatForm />
        </MDBCardBody>
    </MDBCard>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import { MDBCard, MDBCardBody } from 'mdb-vue-ui-kit';

export default {
    setup() {

    },
    components: {
        Navbar,
        NewChatForm,
        MDBCard,
        MDBCardBody
    }
}
</script>

<style>

</style>
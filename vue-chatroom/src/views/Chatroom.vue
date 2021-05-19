<template>
    <Navbar />
    <MDBCard class="mt-5 mx-auto w-50 chat-window">
        <MDBCardBody class="p-5 text-center">
            <ChatWindow />
        </MDBCardBody>
    </MDBCard>
    <MDBCard class="mt-1 mx-auto w-50">
        <MDBCardBody class="p-5 text-center">
            <NewChatForm />
        </MDBCardBody>
    </MDBCard>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import { MDBCard, MDBCardBody } from 'mdb-vue-ui-kit';

export default {
    setup() {

    },
    components: {
        Navbar,
        ChatWindow,
        NewChatForm,
        MDBCard,
        MDBCardBody
    }
}
</script>

<style>
.chat-window {
    min-height: 250px;
    max-height: 500px;
    overflow: auto;
}
</style>
<template>
    <div v-if="!documents">
        <h1>Start chatting now!</h1>
    </div>
    <div v-if="documents">
        <div v-for="doc in documents" :key="doc.id" class="note"
            :class="{ 'note-success': doc.name === user.displayName, 'note-primary': doc.name !== user.displayName }">
            <p v-if="doc.name !== user.displayName"><strong>{{ doc.name }}</strong></p>
            <p>{{ doc.message }}</p>
            <p class="date">{{ formatDistanceToNow(doc.createdAt.toDate()) }}</p>
        </div>
    </div>
    <div class="note note-danger" v-if="error">
        {{ error }}
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection.js';
import getUser from '@/composables/getUser.js';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup() {
        const { documents, error } = getCollection('messages');
        const { user } = getUser();

        return { documents, error, user, formatDistanceToNow }
    }
}
</script>

<style scoped>
.note {
    margin-top: 3px;
    margin-bottom: 3px;
}

.note-success {
    margin-left: 50px;
    border-left: 0;
    border-right: 6px solid #00b74a;
    text-align: right;
}

.note-primary {
    margin-right: 50px;
    text-align: left;
}

.date {
    font-size: x-small;
    margin-bottom: 0;
}
</style>
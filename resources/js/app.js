import './bootstrap';
import { createApp } from 'vue';
import Book from './components/Book.vue';

const app = createApp({
    components: {
        Book,
    },
});

app.mount('#app');

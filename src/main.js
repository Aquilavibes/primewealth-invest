//main.js

import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import './index.css'


// Create Vue app instance
const app = createApp(App);

app.use(router);

app.mount('#app');

// Export Firebase services for use in other part
